import { Logo } from './components';
import SideBarNav from './features/SideBarNav/SideBarNav';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Logo />
      <SideBarNav />
    </div>
  );
};

export default App;
