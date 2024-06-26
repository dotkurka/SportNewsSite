import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { changePassword, personal } from 'constants/routesPath';
import { UserRole } from 'features/auth/enums';
import { logOut } from 'redux/authSlice';
import { managerDisabled, managerEnabled, managerMode } from 'redux/managerModeSlice';

import type { INavBarUserMenu } from 'layouts/Desktop/components/NavBar/NavBarUser/types';

import './NavBarUser.scss';

const NavBarUserMenu = ({ user, handleCloseMenu, className = '' }: INavBarUserMenu) => {
  const managerModState = useSelector(managerMode);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    handleCloseMenu();
  };

  const handleToggleManagerMod = () => {
    if (!managerModState) {
      dispatch(managerEnabled());
    } else {
      dispatch(managerDisabled());
    }
    handleCloseMenu();
  };

  const checkUserRole = user?.role === UserRole.Admin;
  const managerButtomText = managerModState ? 'Exit Manager Mode' : 'Manager Mode';

  return (
    <div className={`navbar-user-menu ${className}`}>
      <div className='navbar-user-menu-head'>
        <p className='navbar-user-menu-head-name'>
          {user?.firstName} {user?.lastName}
        </p>
        <p className='navbar-user-menu-head-email'>{user?.email}</p>
      </div>
      <div className='navbar-user-menu-list'>
        {checkUserRole && (
          <button className='navbar-user-menu-list-item' onClick={handleToggleManagerMod}>
            {managerButtomText}
          </button>
        )}
        <Link className='navbar-user-menu-list-item' onClick={handleCloseMenu} to={personal}>
          Personal
        </Link>
        <Link className='navbar-user-menu-list-item' onClick={handleCloseMenu} to={changePassword}>
          Change password
        </Link>
        <button className='navbar-user-menu-list-item logout' onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavBarUserMenu;
