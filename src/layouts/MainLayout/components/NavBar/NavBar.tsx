import searchIcon from 'assets/images/search-icon.svg';
import { Logo } from 'components';
import NavBarUser from 'layouts/MainLayout/components/NavBar/NavBarUser/NavBarUser';

import type { IUserData } from 'layouts/MainLayout/components/NavBar/NavBarUser/types';
import './NavBar.scss';

const users: IUserData = {
  image: 'https://content1.rozetka.com.ua/goods/images/big/176937355.png',
  name: 'Ivan',
  surName: 'Baloh',
  status: 'Administrator',
  email: 'barak@gmail.com',
};

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <div className='navbar-contain'>
        <div className='navbar-search'>
          <img src={searchIcon} alt='' />
          <input placeholder='Search by ' />
        </div>
        <div className='navbar-social'> soc</div>
        <div className='navbar-user'>
          <NavBarUser user={users} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
