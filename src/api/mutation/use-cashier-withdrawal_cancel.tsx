import { useMutation } from "../../base";

export const useCashierWithdrawalCancel = () => {
  return useMutation({ name: "cashier_withdrawal_cancel" });
};
