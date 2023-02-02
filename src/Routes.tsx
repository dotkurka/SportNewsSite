import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import routes from 'config/routes';

const Routes = () => {
  return (
    <RouterRoutes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
      <Route path='*' element={<Navigate to='/login' replace />} />
    </RouterRoutes>
  );
};

export default Routes;
