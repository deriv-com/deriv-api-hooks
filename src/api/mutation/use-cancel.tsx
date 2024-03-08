import { useMutation } from "../../base";

export const useCancel = () => {
  return useMutation({ name: "cancel" });
};
