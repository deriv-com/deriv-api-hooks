import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useKycAuthStatus = (): {
  data: TSocketResponseData<"kyc_auth_status">["kyc_auth_status"];
} & Omit<TSocketQueryResults<"kyc_auth_status">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "kyc_auth_status" });

  return {
    data: data?.kyc_auth_status,
    ...rest,
  };
};
