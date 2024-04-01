import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSetSelfExclusion = ({
    ...props
}: Omit<AugmentedMutationOptions<'set_self_exclusion'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'set_self_exclusion', ...props });

    return {
        data: data?.set_self_exclusion,
        ...rest,
    };
};
