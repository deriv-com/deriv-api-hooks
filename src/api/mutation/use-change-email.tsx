import { useMutation } from "../../base";

export const useChangeEmail = () => {
  return useMutation({ name: "change_email" });
};
