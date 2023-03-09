import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentToken, setToken } from 'redux/authSlice';
import Routes from 'Routes';
import './styles/App.scss';

const App = () => {
  const token = useSelector(selectCurrentToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      const localToken = localStorage.getItem('token');
      if (localToken) {
        dispatch(setToken({ token: localToken }));
      }
    }
  }, []);

  return (
    <div className='App'>
      <Routes />
    </div>
  );
};

export default App;
