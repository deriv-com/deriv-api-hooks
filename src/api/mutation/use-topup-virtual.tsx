import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTopupVirtual = ({ ...props }: Omit<AugmentedMutationOptions<'topup_virtual'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'topup_virtual', ...props });

    return {
        data: data?.topup_virtual,
        ...rest,
    };
};
