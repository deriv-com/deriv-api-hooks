import { useMutation } from "../../base";

export const usePaymentagentWithdraw = () => {
  return useMutation({ name: "paymentagent_withdraw" });
};
