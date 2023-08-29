import { Outlet } from 'react-router-dom';

import { useGetAllPageQuery } from 'api/articleApi';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import { Footer, NavBar, SideBar } from 'layouts/Desktop/components';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);

  const { data: SidebarData } = useGetAllPageQuery();

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
        <div className='page-layout-contain-children'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
