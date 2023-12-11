import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { sidebarData } from 'config/SideBarData/SidebarData';
import ArticleSubmitContext from 'features/newArticle/articleSubmitContext';
import { Footer, NavBarManager } from 'layouts/Desktop/components';
import { BurgerMenu, BurgerMenuButton, UserBar } from 'layouts/Mobile/components';
import { selectCurrentUser } from 'redux/authSlice';
import { setOverflowHidden, unsetOverflow } from 'utils/changeOverflow';

import './MobilePageLayout.scss';

// TODO provide feach data instead of mock data

const MobilePageLayout = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const submitRef = useRef<HTMLButtonElement>(null);
  const transitionBurgerRef = useRef(null);

  // const { data: sidebarData } = useGetAllCategoryQuery();
  const user = useSelector(selectCurrentUser);

  const managerMode = false;

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu((show) => !show);
  };

  return (
    <div className='mobile-page manager-mode'>
      <div className='mobile-page-head'>
        {!managerMode && (
          <BurgerMenuButton show={showBurgerMenu} onClick={() => handleShowBurgerMenu()} />
        )}
        <span className='mobile-page-head-title'>Sport News</span>
        <UserBar user={user} />
      </div>

      {!managerMode ? (
        <CSSTransition
          unmountOnExit
          timeout={200}
          in={showBurgerMenu}
          nodeRef={transitionBurgerRef}
          classNames='mobile-page-menu-transition'
          onEnter={() => setOverflowHidden()}
          onExited={() => unsetOverflow()}
        >
          <div ref={transitionBurgerRef} className='mobile-page-menu'>
            <BurgerMenu handleShow={setShowBurgerMenu} data={sidebarData} />
          </div>
        </CSSTransition>
      ) : (
        <NavBarManager data={sidebarData} submitArticleRef={submitRef} />
      )}
      <ArticleSubmitContext.Provider value={submitRef}>
        <Outlet />
      </ArticleSubmitContext.Provider>
      {!managerMode && <Footer />}
    </div>
  );
};

export default MobilePageLayout;
