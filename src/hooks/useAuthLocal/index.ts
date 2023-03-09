import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentToken, setToken } from 'redux/authSlice';

const useAuthLocal = () => {
  // 1 беру токе з слайзу
  // token true save token in auth ttoken
  // token false беру його з локалу
  // якщо він там є тоді ми його зберігаємо в authToken і записужм в слайси
  // AuthToken ? валідуєм (не обовязково) якщо він валідний то повертаєм токен AuthToken : null і видалити з слайсів і локалу;

  const [authTokens, setAuthTokens] = useState('');

  const token = useSelector(selectCurrentToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setAuthTokens(token);
    } else {
      const localToken = localStorage.getItem('token');
      if (localToken) {
        setAuthTokens(localToken);
        dispatch(setToken({ token: localToken }));
      } else {
        setAuthTokens('');
        localStorage.removeItem('token');
      }
    }
  }, []);

  if (!authTokens) {
    return null;
  }
  return authTokens;
};

export default useAuthLocal;
