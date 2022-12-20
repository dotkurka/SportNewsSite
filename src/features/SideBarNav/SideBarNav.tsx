import { SideBar, SubSideBar } from '../../components';

import './SideBarNav.scss';

const SideBarNav = () => {
  return (
    <nav className='sidebar-nav'>
      <SideBar />
      <SubSideBar />
    </nav>
  );
};

export default SideBarNav;
