import { useMutation } from "../../base";

export const usePasskeysRegister = () => {
  return useMutation({ name: "passkeys_register" });
};
