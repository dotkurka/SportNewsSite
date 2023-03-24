import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyGetUserQuery } from 'api/authApi';
import { selectCurrentToken, setToken, setUser } from 'redux/authSlice';
import Routes from 'Routes';
import './styles/App.scss';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  const [getUser, { data: user }] = useLazyGetUserQuery();

  useEffect(() => {
    if (!token) {
      const localToken = localStorage.getItem('token');

      if (localToken) {
        dispatch(setToken({ token: localToken }));
      }
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [token, user]);

  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <div className='App'>
      <Routes />
    </div>
  );
};

export default App;
