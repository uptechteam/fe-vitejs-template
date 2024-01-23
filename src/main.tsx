import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ErrorMessage } from '~/components/atoms';
import { LoadingMessage } from '~/components/atoms/LoadingMessage';
import { router } from '~/router/routes';

import { theme } from './styles/theme';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <ErrorBoundary FallbackComponent={ErrorMessage} key={location.pathname}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
          stacked
        />
      </ThemeProvider>
    </ErrorBoundary>
  </Suspense>
);
