import { useMutation as useReactQueryMutation } from '@tanstack/react-query';
import { useAPI } from '../../base/use-context-hooks';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNewAccountVirtual = ({
    ...options
}: Omit<AugmentedMutationOptions<'new_account_virtual'>, 'name'> = {}) => {
    const { derivAPIClient } = useAPI();

    return useReactQueryMutation({
        mutationFn: payload => derivAPIClient.send('new_account_virtual', payload),
        ...options,
    });
};
