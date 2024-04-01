import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useP2pChatCreate = ({ ...props }: Omit<AugmentedMutationOptions<'p2p_chat_create'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'p2p_chat_create', ...props });

    return {
        data: data?.p2p_chat_create,
        ...rest,
    };
};
