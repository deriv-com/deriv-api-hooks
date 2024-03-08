import { useMutation } from "../../base";

export const useSetSettings = () => {
  return useMutation({ name: "set_settings" });
};
