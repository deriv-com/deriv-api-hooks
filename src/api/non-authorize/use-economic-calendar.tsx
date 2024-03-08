import { useQuery } from '../../base';
import { TSocketQueryOptions } from '../../base/use-query';

export const useEconomicCalendar = ({ payload }: TSocketQueryOptions<'economic_calendar'>) => {
    const { data, ...rest } = useQuery({ name: 'economic_calendar', payload });

    return {
        data: data?.economic_calendar,
        ...rest,
    };
};
