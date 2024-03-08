import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useAppMarkupStatistics = (): {
  data: TSocketResponseData<"app_markup_statistics">["app_markup_statistics"];
} & Omit<TSocketQueryResults<"app_markup_statistics">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({
    name: "app_markup_statistics",
  });

  return {
    data: data?.app_markup_statistics,
    ...rest,
  };
};
