import useAuthLocal from 'hooks/useAuthLocal';
import { LogIn, SignIn } from 'pages';

import './styles/App.scss';

const App = () => {
  const isAuth = useAuthLocal();
  console.log(isAuth);

  return (
    <div className='App'>
      <LogIn />
      <SignIn />

      {isAuth && <div>dfdfsfsdf</div>}
    </div>
  );
};

export default App;
