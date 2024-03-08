import { useMutation } from "../../base";

export const useSellExpired = () => {
  return useMutation({ name: "sell_expired" });
};
