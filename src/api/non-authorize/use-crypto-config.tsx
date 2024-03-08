import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const useCryptoConfig = ({
  payload,
}: TSocketQueryOptions<"crypto_config">) => {
  const { data, ...rest } = useQuery({ name: "crypto_config", payload });

  return {
    data: data?.crypto_config,
    ...rest,
  };
};
