import { useMutation } from "../../base";

export const useAppRegister = () => {
  return useMutation({ name: "app_register" });
};
