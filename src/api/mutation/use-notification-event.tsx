import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNotificationEvent = ({
    ...props
}: Omit<AugmentedMutationOptions<'notification_event'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'notification_event', ...props });

    return {
        data: data?.notification_event,
        ...rest,
    };
};
