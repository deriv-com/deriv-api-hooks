import { useMutation } from "../../base";

export const useForget = () => {
  return useMutation({ name: "forget" });
};
