import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useLoginHistory = (): {
  data: TSocketResponseData<"login_history">["login_history"];
} & Omit<TSocketQueryResults<"login_history">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "login_history" });

  return {
    data: data?.login_history,
    ...rest,
  };
};
