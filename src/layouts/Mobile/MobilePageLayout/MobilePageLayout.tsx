import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { sidebarData } from 'config/SideBarData/SidebarData';
import ArticleSubmitContext from 'features/article/articleSubmitContext';
import useSearchArticle from 'hooks/useSeachArticle';
import { Footer, NavBarManager, SwitchTransition } from 'layouts/Desktop/components';
import { BurgerMenu, BurgerMenuButton, UserBar } from 'layouts/Mobile/components';
import SearchBar from 'layouts/Mobile/components/SearchBar/SearchBar';
import { selectCurrentUser } from 'redux/authSlice';
import { managerMode as managerModState } from 'redux/managerModeSlice';
import { lockScrollbar, unlockScrollbar } from 'utils/lockScrollbar';

import './MobilePageLayout.scss';

// TODO provide feach data instead of mock data

const MobilePageLayout = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [search, { isLoading }] = useSearchArticle(searchValue);

  const submitRef = useRef<HTMLButtonElement>(null);
  const transitionBurgerRef = useRef(null);

  const managerMode = useSelector(managerModState);
  const user = useSelector(selectCurrentUser);

  // const { data: sidebarData } = useGetAllCategoryQuery();

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu((show) => !show);
  };

  return (
    <div className={`mobile-page  ${managerMode ? 'manager-mode' : ''}`}>
      <div className='mobile-page-head'>
        {!managerMode && (
          <BurgerMenuButton show={showBurgerMenu} onClick={() => handleShowBurgerMenu()} />
        )}
        <span className='mobile-page-head-title'>Sport News</span>
        <UserBar user={user} />
      </div>
      <SwitchTransition trigger={managerMode}>
        {!managerMode ? (
          <>
            <CSSTransition
              unmountOnExit
              timeout={200}
              in={showBurgerMenu}
              nodeRef={transitionBurgerRef}
              classNames='mobile-page-menu-transition'
              onEnter={() => lockScrollbar()}
              onExited={() => unlockScrollbar()}
            >
              <div ref={transitionBurgerRef} className='mobile-page-menu'>
                <BurgerMenu handleShow={setShowBurgerMenu} data={sidebarData} />
              </div>
            </CSSTransition>
            <SearchBar isLoading={isLoading} result={search} onChange={handleSearch} />
          </>
        ) : (
          <NavBarManager data={sidebarData} submitArticleRef={submitRef} />
        )}
        <ArticleSubmitContext.Provider value={submitRef}>
          <Outlet />
        </ArticleSubmitContext.Provider>
        {!managerMode && <Footer />}{' '}
      </SwitchTransition>
    </div>
  );
};

export default MobilePageLayout;
