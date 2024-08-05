import { TSocketEndpointNames, TSocketSubscribableEndpointNames } from '../types/api.types';
import {
    DerivAPIClient,
    DerivAPIClientOptions,
    SendFunctionArgs,
    SubscribeFunctionArgs,
    UnsubscribeHandlerArgs,
} from './deriv-api-client';

export class DerivAPIManager {
    options?: DerivAPIClientOptions;
    activeClient: DerivAPIClient;
    clientList: Map<string, DerivAPIClient> = new Map();

    constructor(endpoint: string, options?: DerivAPIClientOptions) {
        const client = new DerivAPIClient(endpoint, options);
        this.clientList.set(endpoint, client);
        this.activeClient = client;
        this.options = options;
    }

    async send<T extends TSocketEndpointNames>(args: SendFunctionArgs<T>) {
        return this.activeClient.send(args);
    }

    async subscribe<T extends TSocketSubscribableEndpointNames>(args: SubscribeFunctionArgs<T>) {
        return this.activeClient.subscribe(args);
    }

    async unsubscribe(args: UnsubscribeHandlerArgs) {
        return this.activeClient.unsubscribe(args);
    }

    async switchConnection(endpoint: string) {
        const matchingInstance = this.clientList.get(endpoint);
        if (matchingInstance) {
            this.activeClient = matchingInstance;
            return;
        }
        const subscribeHandlers = this.activeClient.subscribeHandler;
        const newInstance = new DerivAPIClient(endpoint, this.options);
        await newInstance.reinitializeSubscriptions(subscribeHandlers, this.activeClient.authorizePayload);
        this.clientList.set(endpoint, newInstance);
        this.activeClient = newInstance;
    }
}
