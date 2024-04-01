import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useSetFinancialAssessment = ({
    ...props
}: Omit<AugmentedMutationOptions<'set_financial_assessment'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'set_financial_assessment', ...props });

    return {
        data: data?.set_financial_assessment,
        ...rest,
    };
};
