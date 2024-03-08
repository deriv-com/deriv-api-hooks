import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useAppGet = (): {
  data: TSocketResponseData<"app_get">["app_get"];
} & Omit<TSocketQueryResults<"app_get">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "app_get" });

  return {
    data: data?.app_get,
    ...rest,
  };
};
