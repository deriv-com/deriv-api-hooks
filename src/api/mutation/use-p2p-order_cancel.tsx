import { useMutation } from "../../base";

export const useP2pOrderCancel = () => {
  return useMutation({ name: "p2p_order_cancel" });
};
