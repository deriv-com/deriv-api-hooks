import { useMutation } from "../../base";

export const useCopyStop = () => {
  return useMutation({ name: "copy_stop" });
};
