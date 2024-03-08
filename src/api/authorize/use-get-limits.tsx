import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useGetLimits = (): {
  data: TSocketResponseData<"get_limits">["get_limits"];
} & Omit<TSocketQueryResults<"get_limits">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "get_limits" });

  return {
    data: data?.get_limits,
    ...rest,
  };
};
