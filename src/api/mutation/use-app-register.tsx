import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAppRegister = ({ ...props }: Omit<AugmentedMutationOptions<'app_register'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'app_register', ...props });

    return {
        data: data?.app_register,
        ...rest,
    };
};
