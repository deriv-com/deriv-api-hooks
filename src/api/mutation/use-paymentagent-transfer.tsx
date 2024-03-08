import { useMutation } from "../../base";

export const usePaymentagentTransfer = () => {
  return useMutation({ name: "paymentagent_transfer" });
};
