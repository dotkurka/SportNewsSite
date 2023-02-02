import { LogInLayout } from 'layouts';
import Routes from 'Routes';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <LogInLayout>
        <Routes />
      </LogInLayout>
    </div>
  );
};

export default App;
