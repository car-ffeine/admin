import { createBrowserRouter } from 'react-router-dom';

import LoginProcessing from '@component/Login/LoginProcessing';

import App from 'App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin/login',
    element: <LoginProcessing />,
  },
]);
