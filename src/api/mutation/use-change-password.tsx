import { useMutation } from "../../base";

export const useChangePassword = () => {
  return useMutation({ name: "change_password" });
};
