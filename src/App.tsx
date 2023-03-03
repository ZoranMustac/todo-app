import { ThemeProvider, CssBaseline } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme.ts';
import { Dashboard } from './pages/dashboard/dashboard.tsx';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComposeContext from './context/Compose.context.tsx';
import { rootContext } from './context/root.context.ts';

//Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
    return (
        <QueryClientProvider client={queryClient}>
            <ComposeContext components={rootContext}>
                <ThemeProvider theme={customTheme}>
                    <CssBaseline />
                    <Dashboard />
                </ThemeProvider>
            </ComposeContext>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
