import { AugmentedMutationResult, useMutation } from "base/use-mutation";

export const useAuthorize = (): AugmentedMutationResult<"authorize"> => {
    return useMutation({ name: "authorize" });
};
