import { useMutation } from "../../base";

export const useContractUpdate = () => {
  return useMutation({ name: "contract_update" });
};
