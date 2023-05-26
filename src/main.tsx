import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ErrorMessage } from '~/components/atoms';
import { LoadingMessage } from '~/components/atoms/LoadingMessage';
import { router } from '~/router/routes';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <ErrorBoundary FallbackComponent={ErrorMessage} key={location.pathname}>
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
      />
    </ErrorBoundary>
  </Suspense>
);
