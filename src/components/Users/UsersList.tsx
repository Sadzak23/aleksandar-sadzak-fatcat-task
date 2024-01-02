import { FC, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getUsers } from '@homework-task/api/UserApi';
import { Button } from '@homework-task/components/Button';
import { UserCards } from '@homework-task/components/Users/UserCards';
import { UserTable } from '@homework-task/components/Users/UserTable';
import { IUser } from '@homework-task/types/IUser';

export const UsersList: FC = () => {
    const [isTableView, setIsTableView] = useState(true);

    const { data, error, isLoading } = useQuery<IUser[], AxiosError>({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    return isLoading ? (
        <p>Loading...</p>
    ) : error ? (
        <p>{error.message}</p>
    ) : data ? (
        <div className="users-list">
            <Button onClick={() => setIsTableView((oldValue) => !oldValue)}>
                {isTableView ? 'Switch to Card View' : 'Switch to Table View'}
            </Button>
            {isTableView ? (
                <UserTable users={data} />
            ) : (
                <UserCards users={data} />
            )}
        </div>
    ) : null;
};
