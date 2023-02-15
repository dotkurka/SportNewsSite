import { Link } from 'react-router-dom';

import { Button } from 'components';
import { ButtonVariant } from 'components/Button/types';

import './NavBarUser.scss';
import type { IBarUser } from 'layouts/Desktop/MainLayout/components/NavBar/NavBarUser/types';

const NavBarUserMenu = ({ user }: IBarUser) => {
  return (
    <div className='navbar-user-menu'>
      <div className='navbar-user-menu-head'>
        <p className='navbar-user-menu-head-name'>
          {user?.name} {user?.surName}
        </p>
        <p className='navbar-user-menu-head-email'>{user?.email}</p>
        <Button className='navbar-user-menu-head-button' variant={ButtonVariant.Contained}>
          View profile
        </Button>
      </div>
      <div className='navbar-user-menu-list'>
        <Link className='navbar-user-menu-list-item' to='.'>
          Personal
        </Link>
        <Link className='navbar-user-menu-list-item' to='.'>
          Change password
        </Link>
        <Link className='navbar-user-menu-list-item' to='.'>
          My surveys
        </Link>
        <button className='navbar-user-menu-list-item logout'>Log out</button>
      </div>
    </div>
  );
};

export default NavBarUserMenu;