import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

import { Button } from '@homework-task/components/Button';
import { IFormGeneratorProps } from '@homework-task/types/IForm';

export type FormData = { [key: string]: string };

export function FormGenerator<IFormData extends FieldValues>({
    validationSchema,
    successMessage,
    renderForm,
    useMutation,
}: IFormGeneratorProps<IFormData>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
    });

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        onSuccess: () => reset(),
    });

    return (
        <form
            className="form"
            onSubmit={(event) => {
                void handleSubmit((data) => mutate(data))(event);
            }}
        >
            {renderForm({ register, errors })}
            {isPending && <p>Loading...</p>}
            {isError && (
                <p className="error">
                    {error.message ||
                        'An error occurred while submitting the form.'}
                </p>
            )}
            {isSuccess && (
                <p>{successMessage || 'Form submitted successfully.'}</p>
            )}
            <Button disabled={isPending} type="submit">
                Submit
            </Button>
        </form>
    );
}
