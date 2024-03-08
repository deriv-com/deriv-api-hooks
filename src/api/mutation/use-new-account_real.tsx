import { useMutation } from '../../base';

export const useNewAccountReal = () => {
    const { data, ...rest } = useMutation({ name: 'new_account_real' });

    return {
        data: data?.new_account_real,
        ...rest,
    };
};
