import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useCashier = (): {
  data: TSocketResponseData<"cashier">["cashier"];
} & Omit<TSocketQueryResults<"cashier">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "cashier" });

  return {
    data: data?.cashier,
    ...rest,
  };
};
