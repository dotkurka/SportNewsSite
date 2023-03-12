import { useState } from 'react';

import userAvatar from 'assets/images/profile-avatar.svg';
import useClickOutside from 'hooks/useClickOutside';
import UserBarMenu from 'layouts/Mobile/components/UserBar/UserBarMenu';

import './UserBar.scss';
import type { IBarUser } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

const UserBar = ({ user }: IBarUser) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const userRef = useClickOutside(() => setShowMenu(false));

  return (
    <div ref={userRef} className='user-bar'>
      <button onClick={() => handleShowMenu()} className='user-bar-btn'>
        <img
          className='user-bar-avatar'
          src={user?.image ? user?.image : userAvatar}
          alt='avatar'
        />
      </button>

      {showMenu && <UserBarMenu user={user} />}
    </div>
  );
};

export default UserBar;
