import { useMutation } from "../../base";

export const useAppUpdate = () => {
  return useMutation({ name: "app_update" });
};
