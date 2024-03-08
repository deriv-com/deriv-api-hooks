import { useMutation } from '../../base';

export const useNotificationEvent = () => {
    const { data, ...rest } = useMutation({ name: 'notification_event' });

    return {
        data: data?.notification_event,
        ...rest,
    };
};
