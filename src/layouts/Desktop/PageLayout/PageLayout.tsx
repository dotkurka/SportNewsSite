import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import { NavBar, SideBar } from 'layouts/Desktop/components';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);

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
