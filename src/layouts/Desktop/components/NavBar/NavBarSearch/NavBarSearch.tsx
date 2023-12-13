import { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from 'assets/images/search-icon.svg';
import useClickOutside from 'hooks/useClickOutside';

import './NavBarSearch.scss';

import type { INavSearch } from 'layouts/Desktop/components/NavBar/NavBarSearch/types';

const NavBarSearch = ({ onChange, isError, result }: INavSearch) => {
  const [focus, setFocus] = useState(false);
  const searchRef = useClickOutside(() => setFocus(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div ref={searchRef} className='navbar-search'>
      <div className='navbar-search-input'>
        <img src={searchIcon} alt='' />
        <input onFocus={() => setFocus(true)} placeholder='Search by' onChange={handleChange} />
      </div>
      {focus && result && (
        <div className='navbar-search-result'>
          {result?.map((item) => (
            <Link className='navbar-search-result-item' to={item.path} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
      {focus && isError && !result?.length && (
        <div className='navbar-search-result'>
          <span className='navbar-search-result-item'>Not Found</span>
        </div>
      )}
    </div>
  );
};

export default NavBarSearch;
