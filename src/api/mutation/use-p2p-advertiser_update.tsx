import { useMutation } from "../../base";

export const useP2pAdvertiserUpdate = () => {
  return useMutation({ name: "p2p_advertiser_update" });
};
