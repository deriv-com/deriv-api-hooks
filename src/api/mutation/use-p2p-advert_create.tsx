import { useMutation } from "../../base";

export const useP2pAdvertCreate = () => {
  return useMutation({ name: "p2p_advert_create" });
};
