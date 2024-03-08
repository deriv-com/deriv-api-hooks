import { useMutation } from "../../base";

export const useResetPassword = () => {
  return useMutation({ name: "reset_password" });
};
