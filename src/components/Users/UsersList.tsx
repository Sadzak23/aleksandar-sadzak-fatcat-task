import { FC, useState } from 'react';

import { Button } from '@homework-task/components/Button';
import { List } from '@homework-task/components/List';
import { UserCards } from '@homework-task/components/Users/UserCards';
import { UserTable } from '@homework-task/components/Users/UserTable';
import { useUsersQuery } from '@homework-task/hooks/useQuery';
import { IUser } from '@homework-task/types/IUser';

export const UsersList: FC = () => {
    const [isTableView, setIsTableView] = useState(true);

    return (
        <List<IUser>
            useQueryHook={useUsersQuery}
            renderitems={(data) => (
                <>
                    <Button
                        className="mb-4"
                        onClick={() => setIsTableView((oldValue) => !oldValue)}
                    >
                        {isTableView
                            ? 'Switch to Card View'
                            : 'Switch to Table View'}
                    </Button>
                    {isTableView ? (
                        <UserTable users={data} />
                    ) : (
                        <UserCards users={data} />
                    )}
                </>
            )}
        />
    );
};
