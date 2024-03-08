import { useMutation } from "../../base";

export const useMt5PasswordChange = () => {
  return useMutation({ name: "mt5_password_change" });
};
