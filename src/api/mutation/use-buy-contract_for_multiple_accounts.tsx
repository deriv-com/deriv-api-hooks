import { useMutation } from "../../base";

export const useBuyContractForMultipleAccounts = () => {
  return useMutation({ name: "buy_contract_for_multiple_accounts" });
};
