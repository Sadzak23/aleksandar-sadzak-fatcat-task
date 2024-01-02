import { FC } from 'react';

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

    return (
        <table className="user-table">
            <thead>
                <tr>
                    {columns.map((e) => (
                        <th key={e.id}>{e.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {users.map((e) => (
                    <tr key={e.id}>
                        {columns.map((col) => (
                            <td key={col.id}>{e[col.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
