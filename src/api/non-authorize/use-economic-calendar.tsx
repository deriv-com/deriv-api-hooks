import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useEconomicCalendar = ({ ...props }: Omit<TSocketQueryOptions<'economic_calendar'>, 'name'> = {}) => {
    const { data, ...rest } = useQuery({ name: 'economic_calendar', ...props });

    return {
        data: data?.economic_calendar,
        ...rest,
    };
};
