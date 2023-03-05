import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from 'redux/authSlice';

const useAuthLocal = () => {
  const [authTokens, setAuthTokens] = useState('');
  const token = useSelector(selectCurrentToken);

  // 1 беру токе з слайзу
  // token true save token in auth ttoken
  // token false беру його з локалу
  // якщо він там є тоді ми його зберігаємо в authToken і записужм в слайси
  // AuthToken ? валідуєм (не обовязково) якщо він валідний то повертаєм токен AuthToken : null і видалити з слайсів і локалу;

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      const localToken = JSON.stringify(localStorage.getItem('token'));
      setAuthTokens(localToken);
    } else {
      localStorage.removeItem('token');
      setAuthTokens('');
    }
  }, [authTokens]);

  if (!authTokens) {
    return null;
  }

  return authTokens;
};

export default useAuthLocal;
