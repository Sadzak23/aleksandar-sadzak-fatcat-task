import '@homework-task/styles/styles.scss';
import { FC } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { UsersList } from '@homework-task/components/Users/UsersList';

const queryClient = new QueryClient();

const App: FC = () => (
    <main>
        <QueryClientProvider client={queryClient}>
            <UsersList />
        </QueryClientProvider>
    </main>
);

export default App;
