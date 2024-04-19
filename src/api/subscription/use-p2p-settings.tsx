import { useSubscribe } from '../../base';

export const useP2PSettings = () => {
    const { data, ...rest } = useSubscribe('p2p_settings');
    return {
        data: data?.p2p_settings,
        ...rest,
    };
};
