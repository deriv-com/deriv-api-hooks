import { ObjectUtils } from '@deriv-com/utils';
import { TSocketEndpointNames, TSocketResponseData } from '../types/api.types';

type DerivAPIClientOptions = {
    onOpen: (e: Event) => void;
    onClose: (e: CloseEvent) => void;
};

type RequestHandler<T extends TSocketEndpointNames = TSocketEndpointNames> = {
    name: TSocketEndpointNames;
    onData: (data: TSocketResponseData<T>) => void;
    promise: Promise<TSocketResponseData<T>>;
    type: 'request';
};

type SubscriptionHandler<T extends TSocketEndpointNames = TSocketEndpointNames> = {
    id: string;
    name: TSocketEndpointNames;
    onData: (data: TSocketResponseData<T>) => void;
    type: 'subscribe';
};

type RequestMap<T extends TSocketEndpointNames = TSocketEndpointNames> = Map<
    string,
    RequestHandler<T> | SubscriptionHandler<T>
>;

export class DerivAPIClient {
    websocket: WebSocket;
    requestHandler: RequestMap;
    req_id: number;

    constructor(endpoint: string, options?: DerivAPIClientOptions) {
        this.req_id = 1;
        this.requestHandler = new Map();

        this.websocket = new WebSocket(endpoint);
        if (typeof options?.onOpen === 'function') {
            this.websocket.addEventListener('open', e => options.onOpen(e));
        }
        if (typeof options?.onClose === 'function') {
            this.websocket.addEventListener('close', e => options.onClose(e));
        }
        this.websocket.addEventListener('message', async response => {
            const parsedData = JSON.parse(response.data);
            const requestHash = await ObjectUtils.hashObject({ ...parsedData.echo_req });
            const matchingHandler = this.requestHandler.get(requestHash);
            if (matchingHandler) {
                if (matchingHandler.type === 'request') {
                    matchingHandler.onData(parsedData);
                    this.requestHandler.delete(requestHash);
                    return;
                }
                if (matchingHandler.type === 'subscribe') {
                    matchingHandler.onData(parsedData);
                }
            }
        });
    }

    // async send<T extends TSocketEndpointNames>(name: TSocketEndpointNames, payload: TSocketRequestPayload<T>) {
    //     const requestHash = await ObjectUtils.hashObject({ ...payload, req_id: this.req_id });
    //     const matchingRequest = this.requestHandler.get(requestHash);
    //     if (matchingRequest && matchingRequest.type === 'request') return matchingRequest.promise;

    //     const { promise, resolve } = PromiseUtils.createPromise<TSocketResponseData<T>>();
    //     const newRequestHandler: RequestHandler = {
    //         name,
    //         onData: (data: TSocketResponseData<T>) => {
    //             resolve(data);
    //         },
    //     };
    // }

    subscribe() {}
    unsubscribe() {}
}
