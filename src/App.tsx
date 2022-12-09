import SingInLayout from './layouts/SingInLayout/SingInLayout';
import { LogIn } from './pages';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <SingInLayout>
        <LogIn />
      </SingInLayout>
    </div>
  );
};

export default App;
