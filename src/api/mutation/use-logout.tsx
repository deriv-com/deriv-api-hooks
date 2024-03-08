import { useMutation } from "../../base";

export const useLogout = () => {
  return useMutation({ name: "logout" });
};
