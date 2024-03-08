import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useOauthApps = (): {
  data: TSocketResponseData<"oauth_apps">["oauth_apps"];
} & Omit<TSocketQueryResults<"oauth_apps">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "oauth_apps" });

  return {
    data: data?.oauth_apps,
    ...rest,
  };
};
