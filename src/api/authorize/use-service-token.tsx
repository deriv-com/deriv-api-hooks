import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useServiceToken = (): {
  data: TSocketResponseData<"service_token">["service_token"];
} & Omit<TSocketQueryResults<"service_token">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "service_token" });

  return {
    data: data?.service_token,
    ...rest,
  };
};
