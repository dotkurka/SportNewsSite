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
      <Route element={<ProtectedRoute to={logIn} isAuth={!!isAuth} />}>
        <Route path={home} element={<PageLayout />}>
          {!managerMode && <Route index element={<Home />} />}
          <Route path={changePassword} element={<Personal />} />
          <Route path={personal} element={<Personal />} />
          <Route path='/test' element={<Test />} />
          <Route path='/:category/:team' element={<Team />} />
          <Route path='/:category/:team/:article' element={<ArticlePage />} />
          <Route element={<ProtectedRoute to={home} isAuth={managerMode} />}>
            <Route index element={<HomeManager />} />
            <Route path='/:category/:team/:article/edit' element={<NewArticle />} />
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
