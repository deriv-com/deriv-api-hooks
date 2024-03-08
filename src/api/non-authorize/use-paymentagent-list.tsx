import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const usePaymentagentList = ({
  payload,
}: TSocketQueryOptions<"paymentagent_list">) => {
  const { data, ...rest } = useQuery({ name: "paymentagent_list", payload });

  return {
    data: data?.paymentagent_list,
    ...rest,
  };
};
