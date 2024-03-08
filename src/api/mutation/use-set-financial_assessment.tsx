import { useMutation } from '../../base';

export const useSetFinancialAssessment = () => {
    const { data, ...rest } = useMutation({ name: 'set_financial_assessment' });

    return {
        data: data?.set_financial_assessment,
        ...rest,
    };
};
