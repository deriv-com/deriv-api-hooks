import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useGetSettings = ({ ...props }: Omit<AugmentedMutationOptions<'get_settings'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'get_settings', ...props });

    return {
        data: data?.get_settings,
        ...rest,
    };
};
