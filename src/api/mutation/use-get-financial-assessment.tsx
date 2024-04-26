import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useGetFinancialAssessment = ({
    ...props
}: Omit<AugmentedMutationOptions<'get_financial_assessment'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'get_financial_assessment', ...props });

    return {
        data: data?.get_financial_assessment,
        ...rest,
    };
};
