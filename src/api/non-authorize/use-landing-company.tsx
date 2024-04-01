import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useLandingCompany = ({ ...props }: Omit<TSocketQueryOptions<'landing_company'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'landing_company', ...props });

    return {
        data: data?.landing_company,
        ...rest,
    };
};
