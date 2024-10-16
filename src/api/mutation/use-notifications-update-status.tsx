import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useNotificationsUpdateStatus = ({ ...props }: Omit<AugmentedMutationOptions<'notifications_update_status'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'notifications_update_status', ...props });

    return {
        data: data?.notifications_update_status,
        ...rest,
    };
};
