import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const usePortfolio = (): {
  data: TSocketResponseData<"portfolio">["portfolio"];
} & Omit<TSocketQueryResults<"portfolio">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "portfolio" });

  return {
    data: data?.portfolio,
    ...rest,
  };
};
