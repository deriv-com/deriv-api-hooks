import { useMutation } from "../../base";

export const useCopyStart = () => {
  return useMutation({ name: "copy_start" });
};
