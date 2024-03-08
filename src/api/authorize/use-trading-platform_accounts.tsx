import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useTradingPlatformAccounts = (): {
  data: TSocketResponseData<"trading_platform_accounts">["trading_platform_accounts"];
} & Omit<TSocketQueryResults<"trading_platform_accounts">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({
    name: "trading_platform_accounts",
  });

  return {
    data: data?.trading_platform_accounts,
    ...rest,
  };
};
