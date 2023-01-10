import { SideBar } from '../../components';

import { SidebarData } from './SidebarData';

import './SideBarNav.scss';

const SideBarNav = () => {
  return (
    <nav className='sidebar-nav'>
      <SideBar data={SidebarData} />
    </nav>
  );
};

export default SideBarNav;
