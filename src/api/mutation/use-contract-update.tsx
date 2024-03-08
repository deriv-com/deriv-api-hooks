import { useMutation } from '../../base';

export const useContractUpdate = () => {
    const { data, ...rest } = useMutation({ name: 'contract_update' });

    return {
        data: data?.contract_update,
        ...rest,
    };
};
