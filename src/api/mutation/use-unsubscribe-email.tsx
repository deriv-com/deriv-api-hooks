import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useUnsubscribeEmail = ({ ...props }: Omit<AugmentedMutationOptions<'unsubscribe_email'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'unsubscribe_email', ...props });

    return {
        data: data,
        ...rest,
    };
};
