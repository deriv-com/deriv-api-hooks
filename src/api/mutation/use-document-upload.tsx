import { useMutation } from '../../base';
import { AugmentedMutationOptions } from '../../base/use-mutation';

export const useDocumentUpload = ({ ...props }: Omit<AugmentedMutationOptions<'document_upload'>, 'name'> = {}) => {
    const { data, ...rest } = useMutation({ name: 'document_upload', ...props });

    return {
        data: data?.document_upload,
        ...rest,
    };
};
