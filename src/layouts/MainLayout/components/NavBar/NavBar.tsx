import { ReactComponent as FacebookIcon } from 'assets/images/facebook-follow-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/google-follow-icon.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter-follow-icon.svg';
import { Logo } from 'components';
import LangSelector from 'components/LangSelector/LangSelector';
import { SidebarData } from 'config/SideBarData/SidebarData';
import NavBarSearch from 'layouts/MainLayout/components/NavBar/NavBarSearch/NavBarSearch';
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
      <div className='navbar-logo'>
        <Logo />
      </div>
      <div className='navbar-contain'>
        <div className='navbar-contain-search'>
          <NavBarSearch data={SidebarData} />
        </div>
        <div className='navbar-contain-social'>
          <div className='navbar-social'>
            <span>Share</span>
            <a href='https://facebook.com/'>
              <FacebookIcon className='navbar-social-item' />
            </a>
            <a href='https://www.google.com/'>
              <GoogleIcon className='navbar-social-item' />
            </a>
            <a href='https://twitter.com/'>
              <TwitterIcon className='navbar-social-item' />
            </a>
          </div>
        </div>
        <div className='navbar-contain-user'>
          <NavBarUser user={users} />
          <LangSelector langueages={['EN', 'FR', 'UA', 'DE']} initialLang='EN' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
