import { ObjectUtils, PromiseUtils } from '@deriv-com/utils';
import {
    TSocketEndpointNames,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from '../types/api.types';

type DerivAPIClientOptions = {
    onOpen: (e: Event) => void;
    onClose: (e: CloseEvent) => void;
};

type RequestHandler<T extends TSocketEndpointNames = TSocketEndpointNames> = {
    name: TSocketEndpointNames;
    onData: (data: TSocketResponseData<T>) => void;
    promise: Promise<TSocketResponseData<T>>;
};

type SubscriptionHandler<T extends TSocketSubscribableEndpointNames = TSocketSubscribableEndpointNames> = {
    name: TSocketSubscribableEndpointNames;
    status: 'active' | 'idle' | 'error';
    onData: (data: TSocketResponseData<T>) => void;
    subscription_id: string;
};

type RequestMap<T extends TSocketEndpointNames = TSocketEndpointNames> = Map<string, RequestHandler<T>>;
type SubscriptionMap<T extends TSocketSubscribableEndpointNames = TSocketSubscribableEndpointNames> = Map<
    string,
    SubscriptionHandler<T>
>;

export class DerivAPIClient {
    websocket: WebSocket;
    requestHandler: RequestMap;
    subscribeHandler: SubscriptionMap;
    req_id: number;
    pauseHandler: ReturnType<typeof PromiseUtils.createPromise>;

    constructor(endpoint: string, options?: DerivAPIClientOptions) {
        this.websocket = new WebSocket(endpoint);
        this.req_id = 1;
        this.requestHandler = new Map();
        this.subscribeHandler = new Map();
        this.pauseHandler = PromiseUtils.createPromise();

        this.websocket.addEventListener('open', e => {
            if (typeof options?.onOpen === 'function') options.onOpen(e);
            const { resolve } = this.pauseHandler;
            resolve({});
        });

        if (typeof options?.onClose === 'function') {
            this.websocket.addEventListener('close', e => options.onClose(e));
        }
        this.websocket.addEventListener('message', async response => {
            const parsedData = JSON.parse(response.data);

            if (parsedData.subscription || parsedData.echo_req?.subscribe) {
                const subscribeHash = await ObjectUtils.hashObject({ ...parsedData.echo_req });
                const matchingHandler = this.subscribeHandler.get(subscribeHash);
                if (matchingHandler) {
                    matchingHandler.onData(parsedData);
                    matchingHandler.subscription_id = parsedData?.subscription?.id ?? '';
                }
            } else if (parsedData) {
                const requestHash = await ObjectUtils.hashObject({ ...parsedData.echo_req });
                const matchingHandler = this.requestHandler.get(requestHash);
                if (matchingHandler) {
                    matchingHandler.onData(parsedData);
                    this.requestHandler.delete(requestHash);
                }
            }
        });
    }

    async send<T extends TSocketEndpointNames>(name: T, requestPayload?: TSocketRequestPayload<T>) {
        const payload = { [name]: 1, ...(requestPayload ?? {}), req_id: this.req_id };
        const requestHash = await ObjectUtils.hashObject(payload);

        const matchingRequest = this.requestHandler.get(requestHash);
        if (matchingRequest) return matchingRequest.promise as Promise<TSocketResponseData<T>>;

        const { promise, resolve } = PromiseUtils.createPromise<TSocketResponseData<T>>();
        const newRequestHandler: RequestHandler<T> = {
            name,
            onData: data => resolve(data),
            promise,
        };
        this.requestHandler.set(requestHash, newRequestHandler as RequestHandler<TSocketEndpointNames>);

        await this.pauseHandler?.promise;
        this.websocket.send(JSON.stringify(payload));
        this.req_id = this.req_id++;

        return promise;
    }

    async subscribe<T extends TSocketSubscribableEndpointNames>(
        name: T,
        subscriptionPayload: TSocketRequestPayload<T>,
        onData: (data: TSocketResponseData<T>) => void
    ) {
        const payload = { [name]: 1, ...(subscriptionPayload ?? {}), req_id: this.req_id };
        const subscriptionHash = await ObjectUtils.hashObject(payload);
        const matchingSubscription = this.subscribeHandler.get(subscriptionHash);

        if (!matchingSubscription) {
            const newSubscriptionHandler: SubscriptionHandler<T> = {
                name,
                status: 'idle',
                onData: onData,
                subscription_id: '',
            };
            this.subscribeHandler.set(
                subscriptionHash,
                newSubscriptionHandler as SubscriptionHandler<TSocketSubscribableEndpointNames>
            );

            if (this.websocket.readyState === 1) {
                this.websocket.send(JSON.stringify(payload));
                this.req_id = this.req_id++;
            }
        }
        return subscriptionHash;
    }

    async unsubscribe(hash: string) {
        const matchingSubscription = this.subscribeHandler.get(hash);
        if (matchingSubscription) {
            const { subscription_id } = matchingSubscription;
            const response = await this.send('forget', { forget: subscription_id });
            if (response && !response.error) {
                this.subscribeHandler.delete(hash);
            }
        }
    }

    switchConnection() {}

    isSocketClosingOrClosed() {
        return [!2, 3].includes(this.websocket.readyState);
    }

    disconnect() {
        if (this.isSocketClosingOrClosed()) {
            this.websocket.close();
        }
    }

    cleanup() {
        this.requestHandler.clear();
        this.subscribeHandler.clear();
        this.disconnect();
    }
}
