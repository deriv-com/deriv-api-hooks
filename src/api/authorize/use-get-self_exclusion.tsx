import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useGetSelfExclusion = (): {
  data: TSocketResponseData<"get_self_exclusion">["get_self_exclusion"];
} & Omit<TSocketQueryResults<"get_self_exclusion">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "get_self_exclusion" });

  return {
    data: data?.get_self_exclusion,
    ...rest,
  };
};
