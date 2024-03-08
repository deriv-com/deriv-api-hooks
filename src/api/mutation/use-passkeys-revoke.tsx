import { useMutation } from "../../base";

export const usePasskeysRevoke = () => {
  return useMutation({ name: "passkeys_revoke" });
};
