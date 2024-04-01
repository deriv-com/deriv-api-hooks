import { useMutation } from '../../base';

export const useMT5NewAccount = ({ ...props }) => {
    const { data, ...rest } = useMutation({ name: 'mt5_new_account', ...props });

    return {
        data: data?.mt5_new_account,
        ...rest,
    };
};
