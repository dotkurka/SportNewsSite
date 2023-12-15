import { useRef } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { sidebarData } from 'config/SideBarData/SidebarData';
import ArticleSubmitContext from 'features/newArticle/articleSubmitContext';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import { Footer, NavBar, NavBarManager, SideBar } from 'layouts/Desktop/components';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);
  const submitRef = useRef<HTMLButtonElement>(null);
  const { category } = useParams();

  // const { data: sidebarData } = useGetAllCategoryQuery();

  const managerMode = true;

  if (isMobile) {
    return <MobilePageLayout />;
  }

  return (
    <div className='page-layout'>
      {!managerMode && (
        <div className='page-layout-bg'>
          <span className='page-layout-bg-first'>{category || 'All'}</span>
          <span className='page-layout-bg-last'>News</span>
        </div>
      )}
      <NavBar />
      {managerMode && <NavBarManager data={sidebarData} submitArticleRef={submitRef} />}
      <div className={`page-layout-contain ${managerMode ? 'center' : ''}`}>
        {!managerMode && <SideBar data={sidebarData} />}
        <div className={`page-layout-contain-children ${managerMode ? 'manager' : ''} `}>
          <ArticleSubmitContext.Provider value={submitRef}>
            <Outlet />
          </ArticleSubmitContext.Provider>
        </div>
      </div>
      {!managerMode && <Footer />}
    </div>
  );
};

export default PageLayout;
