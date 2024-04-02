import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePaymentagentCreate = ({
    ...props
}: Omit<AugmentedMutationOptions<'paymentagent_create'>, 'name'> = {}) => {
    return useMutation({ name: 'paymentagent_create', ...props });
};
