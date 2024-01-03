import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { IUser } from '@homework-task/types/IUser';

export const useUsersQuery = () =>
    useQuery<IUser[], AxiosError>({
        queryKey: ['users'],
        queryFn: () =>
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(({ data }) => data as IUser[]),
    });
