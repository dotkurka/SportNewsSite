import searchIcon from '../../../../assets/images/search-icon.svg';
import { Logo } from '../../../../components';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <div className='navbar-search'>
        <img src={searchIcon} alt='' />
        <input placeholder='Search by ' />
      </div>
      <div className='navbar-social'> soc</div>
      <div className='navbar-user'>user</div>
    </nav>
  );
};

export default NavBar;
