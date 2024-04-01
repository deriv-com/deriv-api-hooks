import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useVerifyEmail = ({ ...props }: Omit<TSocketQueryOptions<'verify_email'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'verify_email', ...props });

    return {
        data: data?.verify_email,
        ...rest,
    };
};
