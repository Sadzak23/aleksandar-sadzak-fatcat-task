import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FieldValues } from 'react-hook-form';

export const useSimpleFormSubmit = ({ onSuccess }: { onSuccess: () => void }) =>
    useMutation({
        onSuccess,
        mutationFn: (formData: FieldValues) =>
            axios.post('https://jsonplaceholder.typicode.com/posts', formData),
    });
