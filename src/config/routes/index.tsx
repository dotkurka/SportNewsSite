import { CheckEmail, ForgotPassword, LogIn, NewPassword } from 'pages';

import type { ReactNode } from 'react';

interface IRoute {
  path: string;
  element: ReactNode;
}

export const routesLogIn: IRoute[] = [
  {
    path: 'ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/NewPassword',
    element: <NewPassword />,
  },
  {
    path: '/CheckEmail',
    element: <CheckEmail />,
  },
];
