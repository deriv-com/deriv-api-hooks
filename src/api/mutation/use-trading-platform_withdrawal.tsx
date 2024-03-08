import { useMutation } from "../../base";

export const useTradingPlatformWithdrawal = () => {
  return useMutation({ name: "trading_platform_withdrawal" });
};
