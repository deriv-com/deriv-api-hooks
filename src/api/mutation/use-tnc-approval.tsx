import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useTncApproval = ({ ...props }: Omit<AugmentedMutationOptions<'tnc_approval'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'tnc_approval', ...props });

    return {
        data: data?.tnc_approval,
        ...rest,
    };
};
