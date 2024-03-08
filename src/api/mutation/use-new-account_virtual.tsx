import { useMutation } from '../../base';

export const useNewAccountVirtual = () => {
    const { data, ...rest } = useMutation({ name: 'new_account_virtual' });

    return {
        data: data?.new_account_virtual,
        ...rest,
    };
};
