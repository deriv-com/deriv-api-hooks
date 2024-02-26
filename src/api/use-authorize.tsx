import { AugmentedMutationResult, useMutation } from "../base/use-mutation";

export const useAuthorize = (): AugmentedMutationResult<"authorize"> => {
    const {
        mutate: _mutate,
        mutateAsync: _mutateAsync,
        ...rest
    } = useMutation({ name: "authorize", onMutate: (payload) => console.log(payload) });

    return {
        mutate: (payload) => _mutate(payload),
        mutateAsync: (payload) => _mutateAsync(payload),
        ...rest,
    };
};
