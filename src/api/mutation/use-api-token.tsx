import { useMutation } from "../../base";

export const useApiToken = () => {
  return useMutation({ name: "api_token" });
};
