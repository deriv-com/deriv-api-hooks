import { useMutation } from "../../base";

export const useNewAccountVirtual = () => {
  return useMutation({ name: "new_account_virtual" });
};
