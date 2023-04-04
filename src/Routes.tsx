import { useSelector } from 'react-redux';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { ProtectedRoute } from 'components';
import { LogInLayout, PageLayout, SignInLayout } from 'layouts';
import { CheckEmail, ForgotPassword, Home, LogIn, NewPassword, SignIn } from 'pages';
import { selectCurrentToken } from 'redux/authSlice';

const Routes = () => {
  const isAuth1 = useSelector(selectCurrentToken);
  const isAuth = true;

  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute to='/login' isAuth={!!isAuth} />}>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute to='/' isAuth={!isAuth} />}>
        <Route path='/login' element={<LogInLayout />}>
          <Route index element={<LogIn />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='check-email' element={<CheckEmail />} />
          <Route path='new-password' element={<NewPassword />} />
        </Route>
        <Route path='/signin' element={<SignInLayout />}>
          <Route index element={<SignIn />} />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </RouterRoutes>
  );
};

export default Routes;
