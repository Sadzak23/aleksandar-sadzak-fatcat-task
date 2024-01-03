import { FC } from 'react';

import { Table } from '@homework-task/components/Table';
import { IUser, IUserData } from '@homework-task/types/IUser';

interface Props {
    users: IUser[];
}

export const UserTable: FC<Props> = ({ users }) => {
    const columns: { id: keyof IUserData; label: string }[] = [
        { id: 'id', label: 'ID' },
        { id: 'name', label: 'Name' },
        { id: 'username', label: 'Username' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone' },
    ];

    return <Table<IUserData> columns={columns} data={users} />;
};
