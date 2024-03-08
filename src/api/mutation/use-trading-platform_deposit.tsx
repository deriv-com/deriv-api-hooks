import { useMutation } from "../../base";

export const useTradingPlatformDeposit = () => {
  return useMutation({ name: "trading_platform_deposit" });
};
