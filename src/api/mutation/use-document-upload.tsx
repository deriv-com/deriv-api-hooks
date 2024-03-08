import { useMutation } from '../../base';

export const useDocumentUpload = () => {
    const { data, ...rest } = useMutation({ name: 'document_upload' });

    return {
        data: data?.document_upload,
        ...rest,
    };
};
