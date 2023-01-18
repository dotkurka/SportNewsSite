import SingInLayout from './layouts/SingInLayout/SingInLayout';
import { NewPassword } from './pages';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <SingInLayout>
        <NewPassword />
      </SingInLayout>
    </div>
  );
};

export default App;
