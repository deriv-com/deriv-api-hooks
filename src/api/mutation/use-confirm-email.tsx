import { useMutation } from '../../base';

export const useConfirmEmail = () => {
    const { data, ...rest } = useMutation({ name: 'confirm_email' });

    return {
        data: data?.confirm_email,
        ...rest,
    };
};
