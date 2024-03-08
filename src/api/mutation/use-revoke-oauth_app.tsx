import { useMutation } from "../../base";

export const useRevokeOauthApp = () => {
  return useMutation({ name: "revoke_oauth_app" });
};
