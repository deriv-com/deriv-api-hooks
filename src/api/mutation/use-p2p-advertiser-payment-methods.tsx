import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';
import { TSocketResponseData } from '../../types/api.types';

export const useP2PAdvertiserPaymentMethods = ({
    ...props
}: Omit<AugmentedMutationOptions<'p2p_advertiser_payment_methods'>, 'name'> = {}) => {
    const queryClient = useQueryClient();
    const queryKey = 'p2p_advertiser_payment_methods';
    const data: TSocketResponseData<'p2p_advertiser_payment_methods'> | undefined = queryClient.getQueryData([
        queryKey,
    ]);
    const {
        data: _data,
        mutate,
        ...rest
    } = useMutation({
        name: 'p2p_advertiser_payment_methods',
        ...props,
        onSuccess: (data, ...rest) => {
            /** Update the cache value on every actions */
            queryClient.setQueryData([queryKey], data);
            props.onSuccess?.(data, ...rest);
        },
    });
    const get = () => mutate({});

    return {
        data: data?.p2p_advertiser_payment_methods,
        get,
        mutate,
        ...rest,
    };
};
