import { useMutation } from "../../base";

export const useAffiliateRegisterPerson = () => {
  return useMutation({ name: "affiliate_register_person" });
};
