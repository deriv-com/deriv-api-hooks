import { useMutation } from '../../base';

export const useAccountClosure = () => {
    const { data, ...rest } = useMutation({ name: 'account_closure' });

    return {
        data: data?.account_closure,
        ...rest,
    };
};
