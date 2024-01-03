import '@homework-task/styles/styles.scss';
import { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { HomePage } from '@homework-task/pages/HomePage';

const queryClient = new QueryClient();

const App: FC = () => (
    <main>
        <QueryClientProvider client={queryClient}>
            <HomePage />
        </QueryClientProvider>
    </main>
);

export default App;
