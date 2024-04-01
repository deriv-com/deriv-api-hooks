import { useAuthorizeQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useGetFinancialAssessment = ({
    ...props
}: Omit<TSocketQueryOptions<'get_financial_assessment'>, 'name'> = {}) => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_financial_assessment', ...props });

    return {
        data: data?.get_financial_assessment,
        ...rest,
    };
};
