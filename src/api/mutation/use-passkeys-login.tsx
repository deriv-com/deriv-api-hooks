import { useMutation } from "../../base";

export const usePasskeysLogin = () => {
  return useMutation({ name: "passkeys_login" });
};
