import { useMutation } from '../../base';

export const useP2pChatCreate = () => {
    const { data, ...rest } = useMutation({ name: 'p2p_chat_create' });

    return {
        data: data?.p2p_chat_create,
        ...rest,
    };
};
