import { createBrowserRouter } from 'react-router-dom';

import Error from '@common/Error';

import LoginProcessing from '@component/Login/LoginProcessing';

import App from 'App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginProcessing />,
  },
  {
    path: '/*',
    element: <Error />,
  },
]);
