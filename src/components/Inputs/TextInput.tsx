import { FC } from 'react';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import { InputWrapper } from '@homework-task/components/Inputs/InputWrapper';

interface ITextInputProps {
    label: string;
    id: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    disabled?: boolean;
    errors?: FieldErrors<FieldValues>;
}

export const TextInput: FC<ITextInputProps> = ({
    label,
    id,
    register,
    required,
    disabled,
    errors,
}) => (
    <InputWrapper id={id} label={label} required={required} errors={errors}>
        <input type="text" id={id} {...register(id)} disabled={disabled} />
    </InputWrapper>
);
