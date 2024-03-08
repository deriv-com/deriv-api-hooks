import { useMutation } from "../../base";

export const useP2pChatCreate = () => {
  return useMutation({ name: "p2p_chat_create" });
};
