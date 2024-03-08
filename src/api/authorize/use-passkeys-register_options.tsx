import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const usePasskeysRegisterOptions = (): {
  data: TSocketResponseData<"passkeys_register_options">["passkeys_register_options"];
} & Omit<TSocketQueryResults<"passkeys_register_options">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({
    name: "passkeys_register_options",
  });

  return {
    data: data?.passkeys_register_options,
    ...rest,
  };
};
