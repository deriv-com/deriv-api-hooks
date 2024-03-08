import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const useWebsiteConfig = ({
  payload,
}: TSocketQueryOptions<"website_config">) => {
  const { data, ...rest } = useQuery({ name: "website_config", payload });

  return {
    data: data?.website_config,
    ...rest,
  };
};
