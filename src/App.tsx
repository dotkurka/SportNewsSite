
import { Logo } from './components';
import { SidebarData } from './config/SideBarData/SidebarData';
import SideBar from './layouts/MainLayout/components/SideBar/SideBar';


import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Logo />
      <SideBar data={SidebarData} />
    </div>
  );
};

export default App;
