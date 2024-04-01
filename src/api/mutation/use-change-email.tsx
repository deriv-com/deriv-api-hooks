import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useChangeEmail = ({ ...props }: Omit<AugmentedMutationOptions<'change_email'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'change_email', ...props });

    return {
        data: data?.change_email,
        ...rest,
    };
};
