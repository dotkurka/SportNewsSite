import { useState } from 'react';

import { SidebarData } from 'config/SideBarData/SidebarData';
import { users } from 'layouts/Desktop/MainLayout/components/NavBar/NavBar';
import BurgerMenu from 'layouts/Mobile/MobilePageLayout/BurgerMenu/BurgerMenu';
import BurgerMenuButton from 'layouts/Mobile/MobilePageLayout/BurgerMenuButton/BurgerMenuButton';
import UserBar from 'layouts/Mobile/MobilePageLayout/UserBar/UserBar';
import './MobilePageLayout.scss';

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
      <BurgerMenu data={SidebarData} />
    </nav>
  );
};

export default MobilePageLayout;
