import { useMutation } from "../../base";

export const useMT5NewAccount = () => {
  return useMutation({ name: "mt5_new_account" });
};
