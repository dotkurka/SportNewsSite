import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';
import useClickOutside from 'hooks/useClickOutside';
import NavBarUserMenu from 'layouts/MainLayout/components/NavBar/NavBarUser/NavBarUserMenu';

import './NavBarUser.scss';
import type { IBarUser } from 'layouts/MainLayout/components/NavBar/NavBarUser/types';

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
          <img className='navbar-user-avatar' src={user.image} alt='avatar' />
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
    <div className='navbar-user-singup'>
      <Button variant={ButtonVariant.Text}>Sing up</Button>
      <Button>Log in</Button>
    </div>
  );
};

export default NavBarUser;
