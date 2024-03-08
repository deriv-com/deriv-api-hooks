import { useMutation } from '../../base';

export const usePaymentagentWithdraw = () => {
    const { data, ...rest } = useMutation({ name: 'paymentagent_withdraw' });

    return {
        data: data?.paymentagent_withdraw,
        ...rest,
    };
};
