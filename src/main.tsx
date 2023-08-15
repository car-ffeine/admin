import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { Suspense } from '@suspensive/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'common.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@router';

import Loading from '@common/Loading';
import ToastContainer from '@common/Toast/ToastContainer';

const theme = createTheme(
  {
    typography: {
      fontFamily: 'Noto Sans KR, sans-serif',
    },
  },
  koKR
);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <CssBaseline />
          <ToastContainer />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={true} />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
