import { ObjectUtils, PromiseUtils } from '@deriv-com/utils';
import {
    TSocketEndpointNames,
    TSocketError,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
    TSocketSubscribeResponseData,
} from '../types/api.types';

type DerivAPIClientOptions = {
    onOpen: (e: Event) => void;
    onClose: (e: CloseEvent) => void;
};

type DataHandler<T extends TSocketEndpointNames> = (data: TSocketResponseData<T>) => void;

type RequestHandler<T extends TSocketEndpointNames = TSocketEndpointNames> = {
    name: TSocketEndpointNames;
    onData: DataHandler<T>;
    onError: (error: TSocketError<T>['error']) => void;
    promise: Promise<TSocketResponseData<T>>;
};

type SubscriptionHandler<T extends TSocketSubscribableEndpointNames> = {
    name: T;
    status: 'active' | 'idle' | 'error';
    data?: TSocketSubscribeResponseData<T>;
    counter: number;
    subscriptions: Map<number, (data: TSocketSubscribeResponseData<T>) => void>;
    onError?: (error: TSocketError<T>['error']) => void;
    subscription_id: string;
};

type RequestMap<T extends TSocketEndpointNames = TSocketEndpointNames> = Map<string, RequestHandler<T>>;
type SubscriptionMap<T extends TSocketSubscribableEndpointNames = TSocketSubscribableEndpointNames> = Map<
    string,
    SubscriptionHandler<T>
>;

type SendFunctionArgs<T extends TSocketEndpointNames> = {
    name: T;
    payload?: TSocketRequestPayload<T>;
};

type SubscribeFunctionArgs<T extends TSocketSubscribableEndpointNames> = {
    name: T;
    payload?: TSocketRequestPayload<T>;
    onData: (data: TSocketSubscribeResponseData<T>) => void;
    onError?: (error: TSocketError<T>['error']) => void;
};

type UnsubscribeHandlerArgs = {
    id: number;
    hash: string;
};

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
                    matchingHandler.data = parsedData;
                    if (matchingHandler.subscriptions?.size) {
                        matchingHandler.subscriptions.forEach(onData => {
                            onData(parsedData);
                        });
                    }
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

    async send<T extends TSocketEndpointNames>({ name, payload }: SendFunctionArgs<T>) {
        this.req_id = this.req_id + 1;
        const requestPayload = { [name]: 1, ...(payload ?? {}), req_id: this.req_id };

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
        this.websocket.send(JSON.stringify(requestPayload));

        return promise;
    }

    async subscribe<T extends TSocketSubscribableEndpointNames>({
        name,
        payload,
        onData,
        onError,
    }: SubscribeFunctionArgs<T>): Promise<{ id: number; hash: string }> {
        const subscriptionPayload = { [name]: 1, ...(payload ?? {}), subscribe: 1 };
        const subscriptionHash = await ObjectUtils.hashObject(subscriptionPayload);
        const matchingSubscription = this.subscribeHandler.get(subscriptionHash);

        if (!matchingSubscription) {
            this.req_id = this.req_id + 1;

            const newSubscriptionHandler: SubscriptionHandler<T> = {
                name,
                status: 'idle',
                onError: onError,
                subscriptions: new Map(),
                subscription_id: '',
                counter: 0,
            };

            newSubscriptionHandler.subscriptions.set(newSubscriptionHandler.counter, onData);
            this.subscribeHandler.set(
                subscriptionHash,
                newSubscriptionHandler as SubscriptionHandler<TSocketSubscribableEndpointNames>
            );

            await this.waitForWebSocketOpen?.promise;
            this.websocket.send(JSON.stringify({ ...subscriptionPayload, req_id: this.req_id }));

            return { id: newSubscriptionHandler.counter, hash: subscriptionHash };
        } else {
            const currentCounter = matchingSubscription.counter + 1;
            matchingSubscription.subscriptions.set(
                currentCounter,
                onData as (data: TSocketSubscribeResponseData<TSocketSubscribableEndpointNames>) => void
            );
            matchingSubscription.counter = currentCounter;
            const matchingHandler = matchingSubscription.subscriptions.get(currentCounter);
            if (typeof matchingHandler === 'function' && matchingSubscription.data) {
                matchingHandler(matchingSubscription.data);
            }

            return { id: matchingSubscription.counter, hash: subscriptionHash };
        }
    }

    async unsubscribe({ hash, id }: UnsubscribeHandlerArgs) {
        const matchingSubscription = this.subscribeHandler.get(hash);
        if (matchingSubscription) {
            if (matchingSubscription.subscriptions.size <= 1) {
                const { subscription_id } = matchingSubscription;
                await this.waitForWebSocketOpen?.promise;
                const response = await this.send({ name: 'forget', payload: { forget: subscription_id } });
                if (response && !response.error) {
                    matchingSubscription.subscriptions.clear();
                    this.subscribeHandler.delete(hash);
                }
            } else {
                matchingSubscription.subscriptions.delete(id);
            }
        }
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
            await this.send({ name: 'ping' });
        }, interval);
    }
}
