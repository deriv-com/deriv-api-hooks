import { useMutation } from '../../base';

export const useAuthorize = () => {
    return useMutation({ name: 'authorize' });
};
