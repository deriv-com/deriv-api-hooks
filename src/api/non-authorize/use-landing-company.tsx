import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useLandingCompany = ({ payload }: TSocketQueryOptions<'landing_company'>) => {
    const { data, ...rest } = useQuery({ name: 'landing_company', payload });

    return {
        data: data?.landing_company,
        ...rest,
    };
};
