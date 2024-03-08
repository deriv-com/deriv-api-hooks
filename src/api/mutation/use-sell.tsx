import { useMutation } from "../../base";

export const useSell = () => {
  return useMutation({ name: "sell" });
};
