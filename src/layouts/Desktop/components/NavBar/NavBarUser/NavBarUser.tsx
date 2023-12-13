import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import userAvatar from 'assets/images/profile-avatar.svg';
import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';
import { UserRole } from 'features/auth/enums';
import useClickOutside from 'hooks/useClickOutside';
import NavBarUserMenu from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUserMenu';

import type { INavBarUser } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './NavBarUser.scss';

const NavBarUser = ({ user }: INavBarUser) => {
  const [showMenu, setShowMenu] = useState(false);
  const userRef = useClickOutside(() => setShowMenu(false));

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const userStatus = {
    [UserRole.Admin]: 'Administrator',
    [UserRole.User]: 'Active',
  };

  if (user) {
    return (
      <div ref={userRef} className='navbar-user'>
        <div className='navbar-user-head'>
          <img className='navbar-user-avatar' src={user?.avatar || userAvatar} alt='avatar' />
          <div className='navbar-user-title'>
            <p className='navbar-user-title-name'>
              {user.firstName} {user.lastName}
            </p>
            <p className='navbar-user-title-status'>{userStatus[user.role]}</p>
          </div>
          <button onClick={() => handleShowMenu()} className='navbar-user-flag'>
            <img src={arrowFlag} alt='>' />
          </button>
        </div>

        {showMenu && <NavBarUserMenu user={user} />}
      </div>
    );
  }

  return (
    <div className='navbar-user-signup'>
      <Button variant={ButtonVariant.Text}>Sign up</Button>
      <Button>Log in</Button>
    </div>
  );
};

export default NavBarUser;
