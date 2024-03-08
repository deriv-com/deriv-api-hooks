import { useMutation } from "../../base";

export const useAffiliateAddCompany = () => {
  return useMutation({ name: "affiliate_add_company" });
};
