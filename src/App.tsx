import '@homework-task/styles/styles.scss';
import { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PageGenerator } from '@homework-task/components/Generators/PageGenerator';
import { homePageData } from '@homework-task/utils/pageData';

const queryClient = new QueryClient();

const App: FC = () => (
    <main>
        <QueryClientProvider client={queryClient}>
            <PageGenerator data={homePageData} />
        </QueryClientProvider>
    </main>
);

export default App;
