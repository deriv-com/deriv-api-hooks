import { useMutation } from '../../base';

export const useAccountSecurity = () => {
    const { data, ...rest } = useMutation({ name: 'account_security' });

    return {
        data: data?.account_security,
        ...rest,
    };
};
