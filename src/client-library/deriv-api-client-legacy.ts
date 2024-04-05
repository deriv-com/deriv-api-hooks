import { URLUtils } from '@deriv-com/utils';
// @ts-expect-error Deriv API is not typed
import DerivAPI from '@deriv/deriv-api/dist/DerivAPIBasic';

type WebsocketMap = Map<string, typeof DerivAPI>;

export class DerivAPILegacy {
    activeSocket: string;
    websocketMap: WebsocketMap = new Map();
    keepAliveIntervalId: NodeJS.Timeout | null = null;

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

    handleReconnect() {
        const activeSocket = this.getActiveSocket();

        if (!activeSocket || activeSocket.readyState === WebSocket.CLOSED) {
            const websocketURL = URLUtils.getWebsocketURL();
            const webSocketInstance = new WebSocket(websocketURL);
            const derivAPI = new DerivAPI({ connection: webSocketInstance });
            this.websocketMap.set(websocketURL, derivAPI);
            this.activeSocket = websocketURL;
        }
    }

    keepAlive(interval: number = 30000) {
        if (this.keepAliveIntervalId) {
            clearInterval(this.keepAliveIntervalId);
        }

        this.keepAliveIntervalId = setInterval(() => {
            this.handleReconnect();

            const activeSocket = this.getActiveSocket();
            if (activeSocket && activeSocket.readyState === WebSocket.OPEN) {
                activeSocket.send(JSON.stringify({ ping: 1 }));
            }
        }, interval);
    }
}
