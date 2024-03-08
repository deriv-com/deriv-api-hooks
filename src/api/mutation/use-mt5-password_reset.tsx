import { useMutation } from "../../base";

export const useMt5PasswordReset = () => {
  return useMutation({ name: "mt5_password_reset" });
};
