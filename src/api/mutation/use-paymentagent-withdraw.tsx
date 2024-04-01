import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const usePaymentagentWithdraw = ({
    ...props
}: Omit<AugmentedMutationOptions<'paymentagent_withdraw'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_withdraw', ...props });

    return {
        data: data?.paymentagent_withdraw,
        ...rest,
    };
};
