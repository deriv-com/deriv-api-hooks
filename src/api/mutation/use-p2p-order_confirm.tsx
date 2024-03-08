import { useMutation } from "../../base";

export const useP2pOrderConfirm = () => {
  return useMutation({ name: "p2p_order_confirm" });
};
