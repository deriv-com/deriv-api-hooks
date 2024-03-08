import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useAppList = (): {
  data: TSocketResponseData<"app_list">["app_list"];
} & Omit<TSocketQueryResults<"app_list">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "app_list" });

  return {
    data: data?.app_list,
    ...rest,
  };
};
