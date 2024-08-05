import { DerivAPIClient, DerivAPIClientOptions } from './deriv-api-client';

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

    getActiveClient() {
        return this.activeClient;
    }

    async switchConnection(endpoint: string) {
        const matchingInstance = this.clientList.get(endpoint);
        if (matchingInstance) {
            if (this.activeClient.websocket.url !== matchingInstance.websocket.url) {
                // If does not match means we have to reinit and forget same like how we are doing with the new instances
                await this.activeClient.unsubscribeAll();
                await matchingInstance.reinitializeSubscriptions(
                    this.activeClient.subscribeHandler,
                    this.activeClient.authorizePayload
                );
            }
            this.activeClient = matchingInstance;

            return;
        }
        const subscribeHandlers = this.activeClient.subscribeHandler;
        const newInstance = new DerivAPIClient(endpoint, this.options);
        // We will call forget on all subscriptions in the old subscription list but maintain the onData reference of the subscription list
        await this.activeClient.unsubscribeAll();
        // Pass the reference to the new connection. Here we will re-subscribe and attach it to the handlers of the new one
        await newInstance.reinitializeSubscriptions(subscribeHandlers, this.activeClient.authorizePayload);
        this.clientList.set(endpoint, newInstance);
        this.activeClient = newInstance;
    }
}
