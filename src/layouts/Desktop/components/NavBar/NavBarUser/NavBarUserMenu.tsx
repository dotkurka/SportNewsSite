import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';
import { UserRole } from 'features/auth/enums';
import { logOut } from 'redux/authSlice';

import type { INavBarUserMenu } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './NavBarUser.scss';

const NavBarUserMenu = ({ user, className = '' }: INavBarUserMenu) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const checkUserRole = user?.role === UserRole.Admin;

  // TODO make handler for the manager mod

  return (
    <div className={`navbar-user-menu ${className}`}>
      <div className='navbar-user-menu-head'>
        <p className='navbar-user-menu-head-name'>
          {user?.firstName} {user?.lastName}
        </p>
        <p className='navbar-user-menu-head-email'>{user?.email}</p>
        <Button className='navbar-user-menu-head-button' variant={ButtonVariant.Contained}>
          View profile
        </Button>
      </div>
      <div className='navbar-user-menu-list'>
        {checkUserRole && (
          <Link className='navbar-user-menu-list-item' to='.'>
            Manager mode
          </Link>
        )}
        <Link className='navbar-user-menu-list-item' to='.'>
          Personal
        </Link>
        <Link className='navbar-user-menu-list-item' to='.'>
          Change password
        </Link>
        <Link className='navbar-user-menu-list-item' to='.'>
          My surveys
        </Link>
        <button onClick={handleLogOut} className='navbar-user-menu-list-item logout'>
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavBarUserMenu;
