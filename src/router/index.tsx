import { createBrowserRouter } from 'react-router-dom';

import GoogleLogin from '@component/Login/GoogleLogin';

import App from 'App';

export const ROUTE_PATH = {
  MAIN_PAGE: '/',
  LOGIN_PAGE: '/login',
} as const;

const { MAIN_PAGE, LOGIN_PAGE } = ROUTE_PATH;

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    element: <App />,
  },
  {
    path: LOGIN_PAGE,
    element: <GoogleLogin />,
  },
]);
