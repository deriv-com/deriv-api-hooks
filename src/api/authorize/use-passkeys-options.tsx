import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const usePasskeysOptions = (): {
  data: TSocketResponseData<"passkeys_options">["passkeys_options"];
} & Omit<TSocketQueryResults<"passkeys_options">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "passkeys_options" });

  return {
    data: data?.passkeys_options,
    ...rest,
  };
};
