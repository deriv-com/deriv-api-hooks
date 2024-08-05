import { useMutation as useReactQueryMutation } from '@tanstack/react-query';
import { useAPI } from '../../base/use-context-hooks';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useLogout = ({ ...options }: Omit<AugmentedMutationOptions<'logout'>, 'name'> = {}) => {
    const { derivAPIClient } = useAPI();

    return useReactQueryMutation({
        mutationFn: () => derivAPIClient.getActiveClient().send({ name: 'logout' }),
        ...options,
    });
};
