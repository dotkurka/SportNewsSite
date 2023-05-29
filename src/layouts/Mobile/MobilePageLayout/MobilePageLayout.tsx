import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import { Footer } from 'layouts/Desktop/components';
import { BurgerMenu, BurgerMenuButton, UserBar } from 'layouts/Mobile/components';
import { selectCurrentUser } from 'redux/authSlice';

import './MobilePageLayout.scss';

// TODO

const MobilePageLayout = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const user = useSelector(selectCurrentUser);

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu((show) => !show);
  };

  return (
    <nav className='mobile-page'>
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
    </nav>
  );
};

export default MobilePageLayout;
