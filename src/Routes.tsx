import { useSelector } from 'react-redux';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { ProtectedRoute } from 'components';
import { checkEmail, forgotPassword, home, logIn, newPassword, signIn } from 'constants/routesPath';
import { LogInLayout, PageLayout, SignInLayout } from 'layouts';
import {
  ArticlePage,
  Category,
  CheckEmail,
  ForgotPassword,
  Home,
  LogIn,
  NewPassword,
  SignIn,
  Team,
} from 'pages';
import NewArticle from 'pages/NewArticle/NewArticle';
import Test from 'pages/Tets/Test';
import { selectCurrentToken } from 'redux/authSlice';
import { managerMode as managerModeState } from 'redux/managerModeSlice';

const Routes = () => {
  // dev mode is true
  const isAuth = useSelector(selectCurrentToken) || true;
  const managerMode = useSelector(managerModeState);

  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute to={logIn} isAuth={!!isAuth} />}>
        <Route path={home} element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path='/video' element={<NewArticle />} />
          <Route path='/home/test' element={<NewArticle />} />
          <Route path='/test' element={<Test />} />
          <Route path='/:category/:team' element={<Team />} />
          <Route path='/:category/:team/:article' element={<ArticlePage />} />
          <Route element={<ProtectedRoute to={home} isAuth={managerMode} />}>
            <Route path='/:category/new' element={<NewArticle />} />
            <Route path='/:category' element={<Category />} />
          </Route>
        </Route>
      </Route>
      <Route element={<ProtectedRoute to={home} isAuth={!isAuth} />}>
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

      {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
    </RouterRoutes>
  );
};

export default Routes;
