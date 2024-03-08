import { useMutation } from '../../base';

export const useLinkWallet = () => {
    const { data, ...rest } = useMutation({ name: 'link_wallet' });

    return {
        data: data?.link_wallet,
        ...rest,
    };
};
