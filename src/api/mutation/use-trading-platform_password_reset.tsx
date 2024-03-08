import { useMutation } from "../../base";

export const useTradingPlatformPasswordReset = () => {
  return useMutation({ name: "trading_platform_password_reset" });
};
