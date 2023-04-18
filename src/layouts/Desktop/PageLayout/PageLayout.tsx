import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import useMobileWidth from 'hooks/useWindowsWidth';
import NavBar from 'layouts/Desktop/MainLayout/components/NavBar/NavBar';
import SideBar from 'layouts/Desktop/MainLayout/components/SideBar/SideBar';
import MobilePageLayout from 'layouts/Mobile/MobilePageLayout/MobilePageLayout';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1023);

  if (isMobile) {
    return <MobilePageLayout />;
  }

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
