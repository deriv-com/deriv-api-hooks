import { useAuthorizeQuery } from '../../base';
import { TSocketQueryResults } from '../../base/use-query';
import { TSocketResponseData } from '../../types/api.types';

export const useGetFinancialAssessment = (): {
    data: TSocketResponseData<'get_financial_assessment'>['get_financial_assessment'];
} & Omit<TSocketQueryResults<'get_financial_assessment'>, 'data'> => {
    const { data, ...rest } = useAuthorizeQuery({ name: 'get_financial_assessment' });

    return {
        data: data?.get_financial_assessment,
        ...rest,
    };
};
