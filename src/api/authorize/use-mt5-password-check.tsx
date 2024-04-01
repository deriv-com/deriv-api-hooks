import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useMt5PasswordCheck = ({ ...props }: Omit<TSocketQueryOptions<'mt5_password_check'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'mt5_password_check', ...props });

    return {
        data: data?.mt5_password_check,
        ...rest,
    };
};
