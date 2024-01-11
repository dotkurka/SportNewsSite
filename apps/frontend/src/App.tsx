import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyGetUserQuery } from 'api/authApi';
import { ScrollToTop } from 'components';
import { logOut, selectCurrentToken, setToken, setUser } from 'redux/authSlice';
import Routes from 'Routes';

import './styles/App.scss';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  const [getUser, { data: user, error }] = useLazyGetUserQuery();

  useLayoutEffect(() => {
    if (!token) {
      const localToken = localStorage.getItem('token');

      if (localToken) {
        dispatch(setToken({ token: localToken }));
      }
    }
  }, [token]);

  useLayoutEffect(() => {
    void getUser();

    if (user) {
      dispatch(setUser(user));
    }
  }, [token, user]);

  useLayoutEffect(() => {
    if (error) {
      dispatch(logOut());
    }
  }, [error]);

  return (
    <div className='App'>
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
