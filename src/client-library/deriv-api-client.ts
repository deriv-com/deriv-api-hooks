import { ObjectUtils, PromiseUtils } from '@deriv-com/utils';
import {
    TSocketEndpointNames,
    TSocketError,
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
    onError: (error: TSocketError<T>['error']) => void;
    promise: Promise<TSocketResponseData<T>>;
};

type SubscriptionHandler<T extends TSocketSubscribableEndpointNames = TSocketSubscribableEndpointNames> = {
    name: TSocketSubscribableEndpointNames;
    status: 'active' | 'idle' | 'error';
    onData: (data: TSocketResponseData<T>) => void;
    onError?: (error: TSocketError<T>['error']) => void;
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
    waitForWebSocketOpen: ReturnType<typeof PromiseUtils.createPromise>;
    keepAliveIntervalId: NodeJS.Timeout | null = null;

    constructor(endpoint: string, options?: DerivAPIClientOptions) {
        this.websocket = new WebSocket(endpoint);
        this.req_id = 0;
        this.requestHandler = new Map();
        this.subscribeHandler = new Map();
        this.waitForWebSocketOpen = PromiseUtils.createPromise();

        this.websocket.addEventListener('open', e => {
            if (typeof options?.onOpen === 'function') options.onOpen(e);
            const { resolve } = this.waitForWebSocketOpen;
            resolve({});
        });

        this.websocket.addEventListener('close', e => {
            if (typeof options?.onClose === 'function') options.onClose(e);
        });

        this.websocket.addEventListener('message', async response => {
            const parsedData = JSON.parse(response.data);

            if (parsedData.subscription || parsedData.echo_req?.subscribe) {
                const { req_id, ...payload } = parsedData.echo_req;
                const subscribeHash = await ObjectUtils.hashObject({ ...payload });
                const matchingHandler = this.subscribeHandler.get(subscribeHash);
                if (matchingHandler) {
                    if (parsedData.error && typeof matchingHandler.onError === 'function') {
                        matchingHandler.onError(parsedData.error);
                        return;
                    }
                    matchingHandler.onData(parsedData);
                    matchingHandler.subscription_id = parsedData?.subscription?.id ?? '';
                }
            } else if (parsedData) {
                const id = parsedData.req_id?.toString();
                const matchingHandler = this.requestHandler.get(id);
                if (matchingHandler) {
                    if (parsedData.error) {
                        matchingHandler.onError(parsedData.error);
                        return;
                    }
                    matchingHandler.onData(parsedData);
                    this.requestHandler.delete(id);
                }
            }
        });

        this.keepAlive();
    }

    async send<T extends TSocketEndpointNames>(name: T, requestPayload?: TSocketRequestPayload<T>) {
        this.req_id = this.req_id + 1;
        const payload = { [name]: 1, ...(requestPayload ?? {}), req_id: this.req_id };

        const matchingRequest = this.requestHandler.get(this.req_id.toString());
        if (matchingRequest) return matchingRequest.promise as Promise<TSocketResponseData<T>>;

        const { promise, resolve, reject } = PromiseUtils.createPromise<TSocketResponseData<T>>();
        const newRequestHandler: RequestHandler<T> = {
            name,
            onData: data => resolve(data),
            onError: error => reject(error),
            promise,
        };
        this.requestHandler.set(this.req_id.toString(), newRequestHandler as RequestHandler<TSocketEndpointNames>);

        await this.waitForWebSocketOpen?.promise;
        this.websocket.send(JSON.stringify(payload));

        return promise;
    }

    async subscribe<T extends TSocketSubscribableEndpointNames>(
        name: T,
        subscriptionPayload: TSocketRequestPayload<T>,
        onData: (data: TSocketResponseData<T>) => void,
        onError?: (error: TSocketError<T>['error']) => void
    ) {
        this.req_id = this.req_id + 1;
        const payload = { [name]: 1, ...(subscriptionPayload ?? {}), subscribe: 1 };
        const subscriptionHash = await ObjectUtils.hashObject(payload);
        const matchingSubscription = this.subscribeHandler.get(subscriptionHash);

        if (!matchingSubscription) {
            const newSubscriptionHandler: SubscriptionHandler<T> = {
                name,
                status: 'idle',
                onData: onData,
                onError: onError,
                subscription_id: '',
            };
            this.subscribeHandler.set(
                subscriptionHash,
                newSubscriptionHandler as SubscriptionHandler<TSocketSubscribableEndpointNames>
            );

            await this.waitForWebSocketOpen?.promise;
            this.websocket.send(JSON.stringify({ ...payload, req_id: this.req_id }));

            return subscriptionHash;
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
                return true;
            }
        }

        return false;
    }

    switchConnection() {}

    isSocketClosingOrClosed() {
        return [!2, 3].includes(this.websocket.readyState);
    }

    disconnect() {
        if (!this.isSocketClosingOrClosed()) {
            this.websocket.close();
        }
    }

    cleanup() {
        this.requestHandler.clear();
        this.subscribeHandler.clear();
        this.disconnect();
    }

    keepAlive(interval = 30000) {
        if (this.keepAliveIntervalId) {
            clearInterval(this.keepAliveIntervalId);
        }

        this.keepAliveIntervalId = setInterval(async () => {
            await this.send('ping');
        }, interval);
    }
}
