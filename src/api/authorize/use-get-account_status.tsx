import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useGetAccountStatus = (): {
  data: TSocketResponseData<"get_account_status">["get_account_status"];
} & Omit<TSocketQueryResults<"get_account_status">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "get_account_status" });

  return {
    data: data?.get_account_status,
    ...rest,
  };
};
