import { useMutation } from '../../base';

export const useTncApproval = () => {
    const { data, ...rest } = useMutation({ name: 'tnc_approval' });

    return {
        data: data?.tnc_approval,
        ...rest,
    };
};
