import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useRealityCheck = (): {
  data: TSocketResponseData<"reality_check">["reality_check"];
} & Omit<TSocketQueryResults<"reality_check">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "reality_check" });

  return {
    data: data?.reality_check,
    ...rest,
  };
};
