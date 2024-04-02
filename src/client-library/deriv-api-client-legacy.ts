import { URLUtils } from '@deriv-com/utils';
// @ts-expect-error Deriv API is not typed
import DerivAPI from '@deriv/deriv-api/dist/DerivAPIBasic';

type WebsocketMap = Map<string, typeof DerivAPI>;

export class DerivAPILegacy {
    activeSocket: string;
    websocketMap: WebsocketMap = new Map();

    constructor() {
        const websocketURL = URLUtils.getWebsocketURL();
        const webSocketInstance = new WebSocket(websocketURL);
        const derivAPI = new DerivAPI({ connection: webSocketInstance });
        this.websocketMap.set(websocketURL, derivAPI);
        this.activeSocket = websocketURL;
    }

    getActiveSocket() {
        return this.websocketMap.get(this.activeSocket);
    }
}
