import { z } from 'zod';

import { TextareaInput } from '@homework-task/components/Inputs/TextareaInput';
import { TextInput } from '@homework-task/components/Inputs/TextInput';
import { useSimpleFormSubmit } from '@homework-task/hooks/useFormSubmit';
import {
    IFormGeneratorProps,
    IRenderFormProps,
} from '@homework-task/types/IForm';

export const simpleFormProps: IFormGeneratorProps<{
    title: string;
    body: string;
}> = {
    validationSchema: z.object({
        title: z
            .string()
            .min(1, 'Title is required')
            .max(30, 'Title must be 30 characters or less'),
        body: z
            .string()
            .min(1, 'Body is required')
            .max(150, 'Body must be 150 characters or less'),
    }),
    successMessage: 'Simple form submitted successfully.',
    useMutation: useSimpleFormSubmit,
    renderForm: ({ register, errors }: IRenderFormProps) => (
        <>
            <TextInput
                label="Title"
                id="title"
                register={register}
                required
                errors={errors}
            />
            <TextareaInput
                label="Body"
                id="body"
                register={register}
                required
                errors={errors}
            />
        </>
    ),
};
