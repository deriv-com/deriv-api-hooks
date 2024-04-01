import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useAffiliateAddCompany = ({
    ...props
}: Omit<AugmentedMutationOptions<'affiliate_add_company'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'affiliate_add_company', ...props });

    return {
        data: data?.affiliate_add_company,
        ...rest,
    };
};
