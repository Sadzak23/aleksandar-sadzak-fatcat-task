import { FC } from 'react';

import type { IUser } from '@homework-task/types/IUser';

interface Props {
    users: IUser[];
}

export const UserCards: FC<Props> = ({ users }) => (
    <div className="user-cards">
        {users.map(({ id, name, username, email, phone }) => (
            <div key={id} className="user">
                <div className="name">
                    <h2>{name}</h2>
                    <div>{`${username} (${id})`}</div>
                </div>
                <div className="contact">
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
            </div>
        ))}
    </div>
);
