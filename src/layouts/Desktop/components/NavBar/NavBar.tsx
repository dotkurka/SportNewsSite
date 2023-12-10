import { ReactComponent as FacebookIcon } from 'assets/images/facebook-follow-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/google-follow-icon.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter-follow-icon.svg';
import { LangSelector, Logo } from 'components';
import { Langue } from 'components/LangSelector/types';
import { sidebarData } from 'config/SideBarData/SidebarData';
import NavBarSearch from 'layouts/Desktop/components/NavBar/NavBarSearch/NavBarSearch';
import NavBarUser from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUser';

import './NavBar.scss';

// Change search data

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Logo />
      </div>
      <div className='navbar-contain'>
        <div className='navbar-contain-search'>
          <NavBarSearch data={sidebarData} />
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
          <NavBarUser />
          <LangSelector
            langueages={[Langue.de, Langue.en, Langue.fr, Langue.ua]}
            initialLang={Langue.en}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
