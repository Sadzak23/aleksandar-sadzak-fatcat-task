import { FC, ReactNode } from 'react';

import { FieldErrors, FieldValues } from 'react-hook-form';

interface Props {
    id: string;
    label: string;
    required?: boolean;
    errors?: FieldErrors<FieldValues>;
    children: ReactNode;
}

export const InputWrapper: FC<Props> = ({
    id,
    label,
    required,
    errors,
    children,
}) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{required ? `${label} *` : label}</label>
            {children}
            {errors && errors[id]?.message && (
                <p className="error">{errors[id]!.message as string}</p>
            )}
        </div>
    );
};
