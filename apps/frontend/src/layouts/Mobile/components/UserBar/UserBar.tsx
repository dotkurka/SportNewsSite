import { useState } from 'react';

import userAvatar from 'assets/images/profile-avatar-white.svg';
import useClickOutside from 'hooks/useClickOutside';
import NavBarUserMenu from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUserMenu';

import type { INavBarUser } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './UserBar.scss';

const UserBar = ({ user }: INavBarUser) => {
  const [showMenu, setShowMenu] = useState(false);
  const userRef = useClickOutside(() => setShowMenu(false));

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='user-bar' ref={userRef}>
      <button className='user-bar-btn' onClick={() => handleShowMenu()}>
        <img alt='avatar' className='user-bar-avatar' src={user?.avatar || userAvatar} />
      </button>

      {showMenu && (
        <NavBarUserMenu className='user-bar-menu' handleCloseMenu={handleShowMenu} user={user} />
      )}
    </div>
  );
};

export default UserBar;
