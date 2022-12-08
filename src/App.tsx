<<<<<<< HEAD
import SingIn from './pages/SingInPage/SingIn';
=======
import SingInLayout from './layouts/SingInLayout/SingInLayout';
import { SingIn } from './pages';
>>>>>>> 04e0b5b... fix: page and create folder 'Layout'

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
<<<<<<< HEAD
      <SingIn />
=======
      <SingInLayout>
        <SingIn />
      </SingInLayout>
>>>>>>> 04e0b5b... fix: page and create folder 'Layout'
    </div>
  );
};

export default App;
