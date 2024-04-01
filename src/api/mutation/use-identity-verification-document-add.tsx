import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useIdentityVerificationDocumentAdd = ({
    ...props
}: Omit<AugmentedMutationOptions<'identity_verification_document_add'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'identity_verification_document_add', ...props });

    return {
        data: data?.identity_verification_document_add,
        ...rest,
    };
};
