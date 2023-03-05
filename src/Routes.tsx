import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { LogInLayout, PageLayout, SignInLayout } from 'layouts';
import { CheckEmail, ForgotPassword, Home, LogIn, NewPassword, SignIn } from 'pages';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/login' element={<LogInLayout />}>
        <Route index element={<LogIn />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='check-email' element={<CheckEmail />} />
        <Route path='new-password' element={<NewPassword />} />
      </Route>

      <Route path='/signin' element={<SignInLayout />}>
        <Route index element={<SignIn />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </RouterRoutes>
  );
};

export default Routes;
