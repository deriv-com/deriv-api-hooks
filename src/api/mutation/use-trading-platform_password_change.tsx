import { useMutation } from "../../base";

export const useTradingPlatformPasswordChange = () => {
  return useMutation({ name: "trading_platform_password_change" });
};
