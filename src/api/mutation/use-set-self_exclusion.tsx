import { useMutation } from "../../base";

export const useSetSelfExclusion = () => {
  return useMutation({ name: "set_self_exclusion" });
};
