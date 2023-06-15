import { createBrowserRouter } from 'react-router-dom';

import { App } from '~/components/atoms';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);
