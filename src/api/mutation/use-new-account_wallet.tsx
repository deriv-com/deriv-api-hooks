import { useMutation } from "../../base";

export const useNewAccountWallet = () => {
  return useMutation({ name: "new_account_wallet" });
};
