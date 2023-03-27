import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '~/components/atoms/App';
import { LoadingMessage } from '~/components/atoms/LoadingMessage';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <App />
  </Suspense>
);
