import { useMutation } from '../../base';

export const usePaymentagentTransfer = () => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_transfer' });

    return {
        data: data?.paymentagent_transfer,
        ...rest,
    };
};
