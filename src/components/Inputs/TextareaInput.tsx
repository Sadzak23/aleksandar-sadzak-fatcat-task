import { FC } from 'react';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import { InputWrapper } from '@homework-task/components/Inputs/InputWrapper';

interface ITextareaInputProps {
    label: string;
    id: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    disabled?: boolean;
    errors?: FieldErrors<FieldValues>;
    rows?: number;
}

export const TextareaInput: FC<ITextareaInputProps> = ({
    label,
    id,
    register,
    required,
    disabled,
    errors,
    rows,
}) => (
    <InputWrapper id={id} label={label} required={required} errors={errors}>
        <textarea
            id={id}
            {...register(id)}
            disabled={disabled}
            rows={rows || 4}
        />
    </InputWrapper>
);
