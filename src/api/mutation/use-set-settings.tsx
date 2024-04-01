import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSetSettings = ({ ...props }: Omit<AugmentedMutationOptions<'set_settings'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'set_settings', ...props });

    return {
        data: data?.set_settings,
        ...rest,
    };
};
