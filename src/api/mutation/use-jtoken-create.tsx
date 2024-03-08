import { useMutation } from "../../base";

export const useJtokenCreate = () => {
  return useMutation({ name: "jtoken_create" });
};
