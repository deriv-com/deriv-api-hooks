import { useMutation } from "../../base";

export const useNotificationEvent = () => {
  return useMutation({ name: "notification_event" });
};
