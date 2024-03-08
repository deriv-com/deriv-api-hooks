import { useMutation } from "../../base";

export const useSetFinancialAssessment = () => {
  return useMutation({ name: "set_financial_assessment" });
};
