import { useMutation } from "../../base";

export const useAccountClosure = () => {
  return useMutation({ name: "account_closure" });
};
