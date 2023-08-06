import { useSelector } from 'react-redux';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { ProtectedRoute } from 'components';
import { LogInLayout, PageLayout, SignInLayout } from 'layouts';
import { CheckEmail, ForgotPassword, Home, LogIn, NewPassword, SignIn } from 'pages';
import NewArticle from 'pages/NewArticle/NewArticle';
import { selectCurrentToken } from 'redux/authSlice';
import { checkEmail, forgotPassword, logIn, newPassword, signIn } from 'utils/routesPath';

const Routes = () => {
  const isAuth = useSelector(selectCurrentToken);

  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute to={logIn} isAuth={!!isAuth} />}>
        <Route path='/' element={<PageLayout />}>
          <Route path='home' element={<Home />} />
          <Route index element={<NewArticle />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute to='/' isAuth={!isAuth} />}>
        <Route path={logIn} element={<LogInLayout />}>
          <Route index element={<LogIn />} />
          <Route path={forgotPassword} element={<ForgotPassword />} />
          <Route path={checkEmail} element={<CheckEmail />} />
          <Route path={newPassword} element={<NewPassword />} />
        </Route>
        <Route path={signIn} element={<SignInLayout />}>
          <Route index element={<SignIn />} />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />
    </RouterRoutes>
  );
};

export default Routes;
