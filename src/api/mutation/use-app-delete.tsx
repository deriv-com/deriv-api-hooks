import { useMutation } from "../../base";

export const useAppDelete = () => {
  return useMutation({ name: "app_delete" });
};
