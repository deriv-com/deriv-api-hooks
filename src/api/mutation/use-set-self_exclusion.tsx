import { useMutation } from '../../base';

export const useSetSelfExclusion = () => {
    const { data, ...rest } = useMutation({ name: 'set_self_exclusion' });

    return {
        data: data?.set_self_exclusion,
        ...rest,
    };
};
