import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useUnsubscribeEmail = ({ ...props }: Omit<AugmentedMutationOptions<'unsubscribe_email'>, 'name'> = {}) => {
    return useMutation({ name: 'unsubscribe_email', ...props });
};
