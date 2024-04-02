import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAuthorize = ({ ...props }: Omit<AugmentedMutationOptions<'authorize'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'authorize', ...props });

    return {
        data: data?.authorize,
        ...rest,
    };
};
