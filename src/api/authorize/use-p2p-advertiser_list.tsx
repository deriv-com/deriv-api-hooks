import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useP2pAdvertiserList = (): {
  data: TSocketResponseData<"p2p_advertiser_list">["p2p_advertiser_list"];
} & Omit<TSocketQueryResults<"p2p_advertiser_list">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "p2p_advertiser_list" });

  return {
    data: data?.p2p_advertiser_list,
    ...rest,
  };
};
