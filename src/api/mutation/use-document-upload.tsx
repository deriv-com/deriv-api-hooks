import { useMutation } from "../../base";

export const useDocumentUpload = () => {
  return useMutation({ name: "document_upload" });
};
