import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useConfirmEmail = ({ ...props }: Omit<AugmentedMutationOptions<'confirm_email'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'confirm_email', ...props });

    return {
        data: data?.confirm_email,
        ...rest,
    };
};
