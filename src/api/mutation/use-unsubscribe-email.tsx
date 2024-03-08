import { useMutation } from '../../base';

export const useUnsubscribeEmail = () => {
    const { data, ...rest } = useMutation({ name: 'unsubscribe_email' });

    return {
        data: data?.unsubscribe_email,
        ...rest,
    };
};
