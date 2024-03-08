import { useMutation } from "../../base";

export const useSetAccountCurrency = () => {
  return useMutation({ name: "set_account_currency" });
};
