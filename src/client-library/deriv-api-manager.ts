import { DerivAPIClient, DerivAPIClientOptions } from './deriv-api-client';

export class DerivAPIManager {
    activeClient: DerivAPIClient;
    clientList: Map<string, DerivAPIClient> = new Map();

    constructor(endpoint: string, options?: DerivAPIClientOptions) {
        const client = new DerivAPIClient(endpoint, options);
        this.clientList.set(endpoint, client);
        this.activeClient = client;
    }

    getActiveClient() {
        return this.activeClient;
    }
}
