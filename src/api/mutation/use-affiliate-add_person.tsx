import { useMutation } from "../../base";

export const useAffiliateAddPerson = () => {
  return useMutation({ name: "affiliate_add_person" });
};
