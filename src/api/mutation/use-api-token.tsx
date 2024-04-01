import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useApiToken = ({ ...props }: Omit<AugmentedMutationOptions<'api_token'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'api_token', ...props });

    return {
        data: data?.api_token,
        ...rest,
    };
};
