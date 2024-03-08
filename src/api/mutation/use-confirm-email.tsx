import { useMutation } from "../../base";

export const useConfirmEmail = () => {
  return useMutation({ name: "confirm_email" });
};
