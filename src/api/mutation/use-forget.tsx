import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useForget = ({ ...props }: Omit<AugmentedMutationOptions<'forget'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'forget', ...props });

    return {
        data: data?.forget,
        ...rest,
    };
};
