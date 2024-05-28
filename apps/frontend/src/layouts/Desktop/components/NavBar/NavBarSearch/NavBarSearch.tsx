import { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from 'assets/images/search-icon.svg';
import useClickOutside from 'hooks/useClickOutside';

import './NavBarSearch.scss';

import type { INavSearch } from 'layouts/Desktop/components/NavBar/NavBarSearch/types';

const NavBarSearch = ({ onChange, isLoading, result }: INavSearch) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const searchRef = useClickOutside(() => setFocus(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  const checkingUnCorrectness = value && focus && isLoading && !result?.length;

  return (
    <div className='navbar-search' ref={searchRef}>
      <div className='navbar-search-input'>
        <img alt='' src={searchIcon} />
        <input
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          placeholder='Search by'
          value={value}
        />
      </div>
      {focus && result && (
        <div className='navbar-search-result'>
          {result?.map((item) => (
            <Link className='navbar-search-result-item' key={item.id} to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
      {checkingUnCorrectness && (
        <div className='navbar-search-result'>
          <span className='navbar-search-result-item'>Not Found</span>
        </div>
      )}
    </div>
  );
};

export default NavBarSearch;
