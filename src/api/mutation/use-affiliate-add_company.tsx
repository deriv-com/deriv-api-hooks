import { useMutation } from '../../base';

export const useAffiliateAddCompany = () => {
    const { data, ...rest } = useMutation({ name: 'affiliate_add_company' });

    return {
        data: data?.affiliate_add_company,
        ...rest,
    };
};
