import { useQuery } from "../../base";
import { TSocketQueryOptions } from "../../base/use-query";

export const useLandingCompanyDetails = ({
  payload,
}: TSocketQueryOptions<"landing_company_details">) => {
  const { data, ...rest } = useQuery({
    name: "landing_company_details",
    payload,
  });

  return {
    data: data?.landing_company_details,
    ...rest,
  };
};
