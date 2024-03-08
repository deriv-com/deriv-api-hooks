import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useAccountList = (): {
  data: TSocketResponseData<"account_list">["account_list"];
} & Omit<TSocketQueryResults<"account_list">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "account_list" });

  return {
    data: data?.account_list,
    ...rest,
  };
};
