import { useMutation } from '../../base';

export const useMT5NewAccount = () => {
    const { data, ...rest } = useMutation({ name: 'mt5_new_account' });

    return {
        data: data?.mt5_new_account,
        ...rest,
    };
};
