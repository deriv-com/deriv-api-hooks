import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useJtokenCreate = ({ ...props }: Omit<AugmentedMutationOptions<'jtoken_create'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'jtoken_create', ...props });

    return {
        data: data?.jtoken_create,
        ...rest,
    };
};
