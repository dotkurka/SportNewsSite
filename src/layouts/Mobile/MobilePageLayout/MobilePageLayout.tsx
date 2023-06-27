import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import { Footer } from 'layouts/Desktop/components';
import { BurgerMenu, BurgerMenuButton, UserBar } from 'layouts/Mobile/components';
import { selectCurrentUser } from 'redux/authSlice';
import { changeBackOverflow, changeOverflow } from 'utils/changeOverflow';

import './MobilePageLayout.scss';

// TODO

const MobilePageLayout = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const user = useSelector(selectCurrentUser);

  const burgerOverflow = () => {
    if (!showBurgerMenu) {
      changeOverflow();
    } else {
      changeBackOverflow();
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
      <div className='mobile-page-menu'>
        <BurgerMenu show={showBurgerMenu} data={SidebarData} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MobilePageLayout;
