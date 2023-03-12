import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import userAvatar from 'assets/images/profile-avatar.svg';
import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';
import useClickOutside from 'hooks/useClickOutside';
import NavBarUserMenu from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUserMenu';

import type { IBarUser } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './NavBarUser.scss';

const NavBarUser = ({ user }: IBarUser) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const userRef = useClickOutside(() => setShowMenu(false));

  if (user) {
    return (
      <div ref={userRef} className='navbar-user'>
        <div className='navbar-user-head'>
          <img
            className='navbar-user-avatar'
            src={user?.image ? user?.image : userAvatar}
            alt='avatar'
          />
          <div className='navbar-user-title'>
            <p className='navbar-user-title-name'>
              {user.name} {user.surName}
            </p>
            <p className='navbar-user-title-status'>{user.status}</p>
          </div>
          <button onClick={() => handleShowMenu()} className='navbar-user-flag'>
            <img src={arrowFlag} alt='' />
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
