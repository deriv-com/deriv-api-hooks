import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useAppMarkupDetails = (): {
  data: TSocketResponseData<"app_markup_details">["app_markup_details"];
} & Omit<TSocketQueryResults<"app_markup_details">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "app_markup_details" });

  return {
    data: data?.app_markup_details,
    ...rest,
  };
};
