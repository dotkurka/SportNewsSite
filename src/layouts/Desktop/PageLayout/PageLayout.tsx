import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { sidebarData } from 'config/SideBarData/SidebarData';
import ArticleSubmitContext from 'features/newArticle/articleSubmitContext';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import { Footer, NavBar, NavBarManager, SideBar } from 'layouts/Desktop/components';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);
  const submitRef = useRef<HTMLButtonElement>(null);

  // const { data: sidebarData } = useGetAllCategoryQuery();

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
      <NavBarManager submitArticleRef={submitRef} />
      <div className='page-layout-contain'>
        <SideBar data={sidebarData} />
        <div className='page-layout-contain-children'>
          <ArticleSubmitContext.Provider value={submitRef}>
            <Outlet />
          </ArticleSubmitContext.Provider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
