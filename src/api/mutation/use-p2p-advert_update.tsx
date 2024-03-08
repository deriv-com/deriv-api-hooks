import { useMutation } from "../../base";

export const useP2pAdvertUpdate = () => {
  return useMutation({ name: "p2p_advert_update" });
};
