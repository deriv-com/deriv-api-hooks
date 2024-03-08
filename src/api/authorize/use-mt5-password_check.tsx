import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useMt5PasswordCheck = (): {
  data: TSocketResponseData<"mt5_password_check">["mt5_password_check"];
} & Omit<TSocketQueryResults<"mt5_password_check">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "mt5_password_check" });

  return {
    data: data?.mt5_password_check,
    ...rest,
  };
};
