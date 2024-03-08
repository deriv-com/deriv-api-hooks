import { useMutation } from "../../base";

export const usePaymentagentCreate = () => {
  return useMutation({ name: "paymentagent_create" });
};
