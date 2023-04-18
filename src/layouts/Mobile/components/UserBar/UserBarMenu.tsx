import { Link } from 'react-router-dom';

import './UserBar.scss';
import type { IBarUser } from 'layouts/Desktop/MainLayout/components/NavBar/NavBarUser/types';

const UserBarMenu = ({ user }: IBarUser) => {
  return (
    <div className='user-bar-menu'>
      <div className='user-bar-menu-head'>
        <p className='user-bar-menu-head-name'>
          {user?.name} {user?.surName}
        </p>
        <p className='user-bar-menu-head-email'>{user?.email}</p>
      </div>

      <Link className='user-bar-menu-list-item' to='.'>
        Personal
      </Link>
      <Link className='user-bar-menu-list-item' to='.'>
        Change password
      </Link>
      <Link className='user-bar-menu-list-item' to='.'>
        My surveys
      </Link>
      <Link className='user-bar-menu-list-item' to='.'>
        Team hub
      </Link>
      <button className='user-bar-menu-list-item logout'>Log out</button>
    </div>
  );
};

export default UserBarMenu;
