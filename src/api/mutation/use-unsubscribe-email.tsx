import { useMutation } from "../../base";

export const useUnsubscribeEmail = () => {
  return useMutation({ name: "unsubscribe_email" });
};
