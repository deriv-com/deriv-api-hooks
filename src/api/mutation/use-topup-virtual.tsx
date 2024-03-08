import { useMutation } from "../../base";

export const useTopupVirtual = () => {
  return useMutation({ name: "topup_virtual" });
};
