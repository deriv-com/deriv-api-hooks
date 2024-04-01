import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useContractUpdate = ({ ...props }: Omit<AugmentedMutationOptions<'contract_update'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'contract_update', ...props });

    return {
        data: data?.contract_update,
        ...rest,
    };
};
