import { useMutation } from '../../base';

export const usePaymentagentCreate = () => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_create' });

    return {
        data: data?.paymentagent_create,
        ...rest,
    };
};
