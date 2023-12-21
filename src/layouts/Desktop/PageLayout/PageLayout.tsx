import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

import { sidebarData } from 'config/SideBarData/SidebarData';
import ArticleSubmitContext from 'features/newArticle/articleSubmitContext';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import {
  Footer,
  NavBar,
  NavBarManager,
  SideBar,
  SwitchTransition,
} from 'layouts/Desktop/components';
import { managerMode as managerModState } from 'redux/managerModeSlice';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);
  const submitRef = useRef<HTMLButtonElement>(null);
  const { category } = useParams();

  const managerMode = useSelector(managerModState);

  // const { data: sidebarData } = useGetAllCategoryQuery();

  if (isMobile) {
    return <MobilePageLayout />;
  }

  return (
    <div className='page-layout'>
      <NavBar />
      <SwitchTransition trigger={managerMode}>
        {!managerMode && (
          <div className='page-layout-bg'>
            <span className='page-layout-bg-first'>{category || 'All'}</span>
            <span className='page-layout-bg-last'>News</span>
          </div>
        )}
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
      </SwitchTransition>
    </div>
  );
};

export default PageLayout;
