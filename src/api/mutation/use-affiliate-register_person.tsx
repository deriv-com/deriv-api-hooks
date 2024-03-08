import { useMutation } from '../../base';

export const useAffiliateRegisterPerson = () => {
    const { data, ...rest } = useMutation({ name: 'affiliate_register_person' });

    return {
        data: data?.affiliate_register_person,
        ...rest,
    };
};
