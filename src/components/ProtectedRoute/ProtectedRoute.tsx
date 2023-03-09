import { Navigate, Outlet } from 'react-router-dom';

interface Ihuy {
  isAuth: boolean;
  to: string;
}

const ProtectedRoute = ({ isAuth, to }: Ihuy) => {
  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={to} replace />;
};

export default ProtectedRoute;
