import { useCallback, useEffect } from 'react';
import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

type TMutateParams = Parameters<ReturnType<typeof useMutation<"p2p_advertiser_payment_methods">>["mutate"]>[0];

export const useP2PAdvertiserPaymentMethods = ({ enabled,
    ...props
}: Omit<AugmentedMutationOptions<'p2p_advertiser_payment_methods'>, 'name'> & { enabled?: boolean } = {}) => {
    const { data, mutate, ...rest } = useMutation({ name: 'p2p_advertiser_payment_methods', ...props });

    useEffect(() => {
        if (enabled) {
            mutate({})
        }
    }, []);

    const create = useCallback((payload: NonNullable<TMutateParams["create"]>, loginid?: TMutateParams["loginid"]) => {
        mutate({ create: payload, loginid });
    }, [mutate])

    const update = useCallback((payload: NonNullable<TMutateParams["update"]>, loginid?: TMutateParams["loginid"]) => {
        mutate({ update: payload, loginid });
    }, [mutate])

    const deletePaymentMethod = useCallback((payload: NonNullable<TMutateParams["delete"]>, loginid?: TMutateParams["loginid"]) => {
        mutate({ delete: payload, loginid });
    }, [mutate])

    return {
        data: data?.p2p_advertiser_payment_methods,
        create,
        update,
        delete: deletePaymentMethod,
        ...rest,
    };
};
