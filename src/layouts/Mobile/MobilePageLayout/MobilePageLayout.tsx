import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import { users } from 'layouts/Desktop/components/NavBar/NavBar';
import { BurgerMenu, BurgerMenuButton, UserBar } from 'layouts/Mobile/components';

import './MobilePageLayout.scss';

// TODO

const MobilePageLayout = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu((show) => !show);
  };

  return (
    <nav className='mobile-page'>
      <div className='mobile-page-head'>
        <BurgerMenuButton show={showBurgerMenu} onClick={() => handleShowBurgerMenu()} />
        <span className='mobile-page-head-title'>Sport News</span>
        <UserBar user={users} />
      </div>
      <div className='mobile-page-menu'>
        <BurgerMenu show={showBurgerMenu} data={SidebarData} />
      </div>
      <Outlet />
    </nav>
  );
};

export default MobilePageLayout;
