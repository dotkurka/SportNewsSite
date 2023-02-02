import { ForgotPassword, LogIn, NewPassword } from 'pages';

import type { ReactNode } from 'react';

interface IRoute {
  path: string;
  element: ReactNode;
}

const routes: IRoute[] = [
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/NewPassword',
    element: <NewPassword />,
  },
];

export default routes;
