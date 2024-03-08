import { useMutation } from '../../base';

export const useTopupVirtual = () => {
    const { data, ...rest } = useMutation({ name: 'topup_virtual' });

    return {
        data: data?.topup_virtual,
        ...rest,
    };
};
