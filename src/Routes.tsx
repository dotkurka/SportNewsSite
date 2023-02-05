import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { LogInLayout, PageLayout, SingInLayout } from 'layouts';
import { CheckEmail, ForgotPassword, Home, LogIn, NewPassword, SingIn } from 'pages';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/login' element={<LogInLayout />}>
        <Route index element={<LogIn />} />
        <Route path='ForgotPassword' element={<ForgotPassword />} />
        <Route path='CheckEmail' element={<CheckEmail />} />
        <Route path='NewPassword' element={<NewPassword />} />
      </Route>

      <Route path='/singin' element={<SingInLayout />}>
        <Route index element={<SingIn />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </RouterRoutes>
  );
};

export default Routes;
