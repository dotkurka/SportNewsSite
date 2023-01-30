import { SidebarData } from 'config/SideBarData/SidebarData';
import NavBar from 'layouts/MainLayout/components/NavBar/NavBar';
import SideBar from 'layouts/MainLayout/components/SideBar/SideBar';

import type { ReactNode } from 'react';
import './PageLayout.scss';

interface IPageLayout {
  children: ReactNode | undefined;
}

const PageLayout = ({ children }: IPageLayout) => {
  return (
    <div className='page-layout'>
      <NavBar />
      <div className='page-layout-contain'>
        <SideBar data={SidebarData} />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
