import { useMutation } from "../../base";

export const useTransferBetweenAccounts = () => {
  return useMutation({ name: "transfer_between_accounts" });
};
