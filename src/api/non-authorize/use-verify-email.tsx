import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const useVerifyEmail = ({
  payload,
}: TSocketQueryOptions<"verify_email">) => {
  const { data, ...rest } = useQuery({ name: "verify_email", payload });

  return {
    data: data?.verify_email,
    ...rest,
  };
};
