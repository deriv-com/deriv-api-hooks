import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useLinkWallet = ({ ...props }: Omit<AugmentedMutationOptions<'link_wallet'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'link_wallet', ...props });

    return {
        data: data?.link_wallet,
        ...rest,
    };
};
