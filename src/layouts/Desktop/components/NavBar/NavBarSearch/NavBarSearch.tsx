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
    <div ref={searchRef} className='navbar-search'>
      <div className='navbar-search-input'>
        <img src={searchIcon} alt='' />
        <input
          value={value}
          onFocus={() => setFocus(true)}
          placeholder='Search by'
          onChange={handleChange}
        />
      </div>
      {focus && result && (
        <div className='navbar-search-result'>
          {result?.map((item) => {
            const path = `${item.category}/${item.path}`;
            return (
              <Link className='navbar-search-result-item' to={path} key={item.id}>
                {item.title}
              </Link>
            );
          })}
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
