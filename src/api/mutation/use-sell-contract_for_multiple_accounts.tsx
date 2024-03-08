import { useMutation } from "../../base";

export const useSellContractForMultipleAccounts = () => {
  return useMutation({ name: "sell_contract_for_multiple_accounts" });
};
