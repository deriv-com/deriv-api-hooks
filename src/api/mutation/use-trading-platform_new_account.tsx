import { useMutation } from "../../base";

export const useTradingPlatformNewAccount = () => {
  return useMutation({ name: "trading_platform_new_account" });
};
