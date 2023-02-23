import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarData } from 'config/SideBarData/SidebarData';
import { users } from 'layouts/Desktop/MainLayout/components/NavBar/NavBar';
import BurgerMenu from 'layouts/Mobile/components/BurgerMenu/BurgerMenu';
import BurgerMenuButton from 'layouts/Mobile/components/BurgerMenuButton/BurgerMenuButton';
import UserBar from 'layouts/Mobile/components/UserBar/UserBar';
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
