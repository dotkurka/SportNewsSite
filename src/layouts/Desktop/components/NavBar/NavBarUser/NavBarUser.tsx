import { useState } from 'react';
import { useSelector } from 'react-redux';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import userAvatar from 'assets/images/profile-avatar.svg';
import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';
import useClickOutside from 'hooks/useClickOutside';
import NavBarUserMenu from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUserMenu';
import { selectCurrentUser } from 'redux/authSlice';

import './NavBarUser.scss';

const NavBarUser = () => {
  const user = useSelector(selectCurrentUser);

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const userRef = useClickOutside(() => setShowMenu(false));

  if (user) {
    // TODO add user image and status and fix types
    return (
      <div ref={userRef} className='navbar-user'>
        <div className='navbar-user-head'>
          <img className='navbar-user-avatar' src={userAvatar} alt='avatar' />
          <div className='navbar-user-title'>
            <p className='navbar-user-title-name'>
              {user.firstName} {user.lastName}
            </p>
            <p className='navbar-user-title-status'>{user.email ? 'Active' : ''}</p>
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
