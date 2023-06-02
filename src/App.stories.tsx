import { Meta } from '@storybook/react';
import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ErrorMessage, LoadingMessage } from '~/components/atoms';
import { router } from '~/router/routes';

const RootComponent = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default {
  component: RootComponent,
} as Meta<typeof RootComponent>;

export const Default = () => (
  <RootComponent>
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
  </RootComponent>
);
