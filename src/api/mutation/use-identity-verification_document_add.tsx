import { useMutation } from "../../base";

export const useIdentityVerificationDocumentAdd = () => {
  return useMutation({ name: "identity_verification_document_add" });
};
