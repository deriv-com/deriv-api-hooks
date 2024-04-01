import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePaymentagentTransfer = ({
    ...props
}: Omit<AugmentedMutationOptions<'paymentagent_transfer'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_transfer', ...props });

    return {
        data: data?.paymentagent_transfer,
        ...rest,
    };
};
