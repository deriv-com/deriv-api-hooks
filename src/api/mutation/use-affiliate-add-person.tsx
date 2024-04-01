import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAffiliateAddPerson = ({
    ...props
}: Omit<AugmentedMutationOptions<'affiliate_add_person'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'affiliate_add_person', ...props });

    return {
        data: data?.affiliate_add_person,
        ...rest,
    };
};
