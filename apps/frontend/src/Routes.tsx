import { useSelector } from 'react-redux';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { ProtectedRoute } from 'components';
import {
  changePassword,
  checkEmail,
  forgotPassword,
  home,
  logIn,
  newPassword,
  personal,
  signIn,
} from 'constants/routesPath';
import { LogInLayout, PageLayout, SignInLayout } from 'layouts';
import {
  ArticlePage,
  Category,
  CheckEmail,
  ForgotPassword,
  Home,
  HomeManager,
  LogIn,
  NewArticle,
  NewPassword,
  Personal,
  SignIn,
  Team,
} from 'pages';
import Test from 'pages/Tets/Test';
import { selectCurrentToken } from 'redux/authSlice';
import { managerMode as managerModeState } from 'redux/managerModeSlice';

const Routes = () => {
  // dev mode is true
  const isAuth = useSelector(selectCurrentToken) || true;
  const managerMode = useSelector(managerModeState);

  return (
    <RouterRoutes>
      <Route element={<ProtectedRoute isAuth={Boolean(isAuth)} to={logIn} />}>
        <Route element={<PageLayout />} path={home}>
          {!managerMode && <Route element={<Home />} index />}
          <Route element={<Personal />} path={changePassword} />
          <Route element={<Personal />} path={personal} />
          <Route element={<Test />} path='/test' />
          <Route element={<Team />} path='/:category/:team' />
          <Route element={<ArticlePage />} path='/:category/:team/:article' />
          <Route element={<ProtectedRoute isAuth={managerMode} to={home} />}>
            <Route element={<HomeManager />} index />
            <Route element={<NewArticle />} path='/:category/:team/:article/edit' />
            <Route element={<NewArticle />} path='/:category/new' />
            <Route element={<Category />} path='/:category' />
          </Route>
        </Route>
      </Route>
      <Route element={<ProtectedRoute isAuth={!isAuth} to={home} />}>
        <Route element={<LogInLayout />} path={logIn}>
          <Route element={<LogIn />} index />
          <Route element={<ForgotPassword />} path={forgotPassword} />
          <Route element={<CheckEmail />} path={checkEmail} />
          <Route element={<NewPassword />} path={newPassword} />
        </Route>
        <Route element={<SignInLayout />} path={signIn}>
          <Route element={<SignIn />} index />
        </Route>
      </Route>

      {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
    </RouterRoutes>
  );
};

export default Routes;
