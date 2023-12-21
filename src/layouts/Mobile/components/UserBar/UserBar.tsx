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
    <div ref={userRef} className='user-bar'>
      <button onClick={() => handleShowMenu()} className='user-bar-btn'>
        <img className='user-bar-avatar' src={user?.avatar || userAvatar} alt='avatar' />
      </button>

      {showMenu && (
        <NavBarUserMenu handleCloseMenu={handleShowMenu} className='user-bar-menu' user={user} />
      )}
    </div>
  );
};

export default UserBar;
