import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

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

  // const { data: sidebarData } = useGetAllCategoryQuery();
  const user = useSelector(selectCurrentUser);

  const burgerOverflow = () => {
    if (!showBurgerMenu) {
      setOverflowHidden();
    } else {
      unsetOverflow();
    }
  };

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu((show) => !show);
    burgerOverflow();
  };

  return (
    <div className='mobile-page'>
      <div className='mobile-page-head'>
        <BurgerMenuButton show={showBurgerMenu} onClick={() => handleShowBurgerMenu()} />
        <span className='mobile-page-head-title'>Sport News</span>
        <UserBar user={user} />
      </div>
      <NavBarManager submitArticleRef={submitRef} />
      <div className='mobile-page-menu'>
        <BurgerMenu show={showBurgerMenu} data={sidebarData} />
      </div>
      <ArticleSubmitContext.Provider value={submitRef}>
        <Outlet />
      </ArticleSubmitContext.Provider>
      <Footer />
    </div>
  );
};

export default MobilePageLayout;
