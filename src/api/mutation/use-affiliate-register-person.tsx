import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAffiliateRegisterPerson = ({
    ...props
}: Omit<AugmentedMutationOptions<'affiliate_register_person'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'affiliate_register_person', ...props });

    return {
        data: data?.affiliate_register_person,
        ...rest,
    };
};
