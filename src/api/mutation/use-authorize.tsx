import { useMutation as useReactQueryMutation } from '@tanstack/react-query';
import { AugmentedMutationOptions } from '../../base/use-mutation';
import { useAPI } from '../../base/use-context-hooks';

// Do not use the useMutation from base. This is a non authorized required call
export const useAuthorize = ({ ...options }: Omit<AugmentedMutationOptions<'authorize'>, 'name'> = {}) => {
    const { derivAPIClient } = useAPI();

    return useReactQueryMutation({
        mutationFn: payload => derivAPIClient.send('authorize', payload),
        ...options,
    });
};
