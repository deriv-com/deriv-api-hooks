import { useMutation } from '../../base';

export const usePaymentAgentCreate = () => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_create' });

    return {
        data: data,
        ...rest,
    };
};
