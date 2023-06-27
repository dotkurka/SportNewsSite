import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from 'redux/authSlice';

import type { IBarUser } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './UserBar.scss';

const UserBarMenu = ({ user }: IBarUser) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className='user-bar-menu'>
      <div className='user-bar-menu-head'>
        <p className='user-bar-menu-head-name'>
          {user?.firstName} {user?.lastName}
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
      <button onClick={handleLogOut} className='user-bar-menu-list-item logout'>
        Log out
      </button>
    </div>
  );
};

export default UserBarMenu;
