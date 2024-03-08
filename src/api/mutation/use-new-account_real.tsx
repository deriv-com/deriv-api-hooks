import { useMutation } from "../../base";

export const useNewAccountReal = () => {
  return useMutation({ name: "new_account_real" });
};
