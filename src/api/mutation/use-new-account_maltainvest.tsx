import { useMutation } from '../../base';

export const useNewAccountMaltainvest = () => {
    const { data, ...rest } = useMutation({ name: 'new_account_maltainvest' });

    return {
        data: data?.new_account_maltainvest,
        ...rest,
    };
};
