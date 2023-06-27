import { Navigate, Outlet } from 'react-router-dom';

import type { IProtectedRoute } from 'components/ProtectedRoute/types';

const ProtectedRoute = ({ isAuth, to }: IProtectedRoute) => {
  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={to} replace />;
};

export default ProtectedRoute;
