import { useAuthorizeQuery } from "../../base";
import { TSocketQueryResults } from "../../base/use-query";
import { TSocketResponseData } from "../../types/api.types";

export const useP2pOrderReview = (): {
  data: TSocketResponseData<"p2p_order_review">["p2p_order_review"];
} & Omit<TSocketQueryResults<"p2p_order_review">, "data"> => {
  const { data, ...rest } = useAuthorizeQuery({ name: "p2p_order_review" });

  return {
    data: data?.p2p_order_review,
    ...rest,
  };
};
