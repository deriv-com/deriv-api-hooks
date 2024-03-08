import { useMutation } from "../../base";

export const useAccountSecurity = () => {
  return useMutation({ name: "account_security" });
};
