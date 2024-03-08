import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useP2pAdvertiserRelations = (): {
  data: TSocketResponseData<"p2p_advertiser_relations">["p2p_advertiser_relations"];
} & Omit<TSocketQueryResults<"p2p_advertiser_relations">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({
    name: "p2p_advertiser_relations",
  });

  return {
    data: data?.p2p_advertiser_relations,
    ...rest,
  };
};
