import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useVerifyEmail = ({ ...props }: Omit<AugmentedMutationOptions<'verify_email'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'verify_email', ...props });

    return {
        data: data?.verify_email,
        ...rest,
    };
};
