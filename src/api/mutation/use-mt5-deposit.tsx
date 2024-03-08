import { useMutation } from "../../base";

export const useMt5Deposit = () => {
  return useMutation({ name: "mt5_deposit" });
};
