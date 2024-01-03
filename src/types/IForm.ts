import { ReactNode } from 'react';

import { UseMutationResult } from '@tanstack/react-query';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { z } from 'zod';

export interface IRenderFormProps {
    register: UseFormRegister<{ [key: string]: string }>;
    errors: ReturnType<typeof useForm>['formState']['errors'];
}

export interface IFormGeneratorProps<IFormData extends FieldValues> {
    validationSchema: z.ZodSchema<IFormData>;
    successMessage?: string;
    useMutation: ({
        onSuccess,
    }: {
        onSuccess: () => void;
    }) => UseMutationResult<unknown, Error, FieldValues, unknown>;
    renderForm: (props: IRenderFormProps) => ReactNode;
}
