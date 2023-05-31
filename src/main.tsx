import 'react-toastify/dist/ReactToastify.min.css';

import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { App } from '~/components/atoms/App';
import { LoadingMessage } from '~/components/atoms/LoadingMessage';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <App />
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
  </Suspense>
);
