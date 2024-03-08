import { useMutation } from '../../base';

export const useIdentityVerificationDocumentAdd = () => {
    const { data, ...rest } = useMutation({ name: 'identity_verification_document_add' });

    return {
        data: data?.identity_verification_document_add,
        ...rest,
    };
};
