import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const useResidenceList = ({
  payload,
}: TSocketQueryOptions<"residence_list">) => {
  const { data, ...rest } = useQuery({ name: "residence_list", payload });

  return {
    data: data?.residence_list,
    ...rest,
  };
};
