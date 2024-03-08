import { useMutation } from '../../base';

export const useAffiliateAddPerson = () => {
    const { data, ...rest } = useMutation({ name: 'affiliate_add_person' });

    return {
        data: data?.affiliate_add_person,
        ...rest,
    };
};
