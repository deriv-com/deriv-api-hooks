import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useVerifyEmailCellxpert = ({ payload }: TSocketQueryOptions<'verify_email_cellxpert'>) => {
    const { data, ...rest } = useQuery({ name: 'verify_email_cellxpert', payload });

    return {
        data: data?.verify_email_cellxpert,
        ...rest,
    };
};
