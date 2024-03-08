import { useMutation } from "../../base";

export const useTncApproval = () => {
  return useMutation({ name: "tnc_approval" });
};
