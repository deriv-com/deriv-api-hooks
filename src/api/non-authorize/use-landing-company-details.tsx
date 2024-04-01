import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useLandingCompanyDetails = ({
    ...props
}: Omit<TSocketQueryOptions<'landing_company_details'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'landing_company_details', ...props });

    return {
        data: data?.landing_company_details,
        ...rest,
    };
};
