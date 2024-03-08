import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const usePaymentagentDetails = (): {
  data: TSocketResponseData<"paymentagent_details">["paymentagent_details"];
} & Omit<TSocketQueryResults<"paymentagent_details">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "paymentagent_details" });

  return {
    data: data?.paymentagent_details,
    ...rest,
  };
};
