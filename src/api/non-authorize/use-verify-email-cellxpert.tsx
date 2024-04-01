import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useVerifyEmailCellxpert = ({
    ...props
}: Omit<TSocketQueryOptions<'verify_email_cellxpert'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'verify_email_cellxpert', ...props });

    return {
        data: data?.verify_email_cellxpert,
        ...rest,
    };
};
