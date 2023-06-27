import { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from 'assets/images/search-icon.svg';

import type { INavSearch } from 'layouts/Desktop/components/NavBar/NavBarSearch/types';
import './NavBarSearch.scss';

const NavBarSearch = ({ data }: INavSearch) => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredResult = data?.filter((result) => {
    return result.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='navbar-search'>
      <div className='navbar-search-input'>
        <img src={searchIcon} alt='' />
        <input placeholder='Search by' onChange={handleChange} />
      </div>
      {search && (
        <div className='navbar-search-result'>
          {filteredResult?.map((item, index) => (
            <Link className='navbar-search-result-item' to={item.path} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarSearch;
