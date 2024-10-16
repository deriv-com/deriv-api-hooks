import { useAuthorizedSubscription } from '../../base';

export const useNotificationsList = () => {
    const { data, ...rest } = useAuthorizedSubscription('notifications_list');
    return {
        data: data?.notifications_list,
        ...rest,
    };
};
