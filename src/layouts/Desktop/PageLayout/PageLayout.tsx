import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import NavBar from 'layouts/Desktop/MainLayout/components/NavBar/NavBar';
import SideBar from 'layouts/Desktop/MainLayout/components/SideBar/SideBar';

import './PageLayout.scss';

const PageLayout = () => {
  return (
    <div className='page-layout'>
      <div className='page-layout-bg'>
        <span className='page-layout-bg-first'>All</span>
        <span className='page-layout-bg-last'>News</span>
      </div>
      <NavBar />
      <div className='page-layout-contain'>
        <SideBar data={SidebarData} />
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
