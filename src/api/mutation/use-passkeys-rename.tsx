import { useMutation } from "../../base";

export const usePasskeysRename = () => {
  return useMutation({ name: "passkeys_rename" });
};
