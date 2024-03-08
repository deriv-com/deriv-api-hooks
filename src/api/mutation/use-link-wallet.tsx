import { useMutation } from "../../base";

export const useLinkWallet = () => {
  return useMutation({ name: "link_wallet" });
};
