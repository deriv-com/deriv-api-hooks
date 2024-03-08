import { useMutation } from "../../base";

export const useForgetAll = () => {
  return useMutation({ name: "forget_all" });
};
