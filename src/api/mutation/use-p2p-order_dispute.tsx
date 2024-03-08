import { useMutation } from "../../base";

export const useP2pOrderDispute = () => {
  return useMutation({ name: "p2p_order_dispute" });
};
