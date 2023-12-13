import { useId } from 'react';

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/select-text-arrow.svg';

import './SearchBar.scss';

const SearchBar = () => {
  const inputId = useId();

  return (
    <div className='search-bar'>
      <div className='search-bar-category'>
        <ArrowIcon className='search-bar-category-arrow' />
        <span className='search-bar-category-text'>Home</span>
      </div>

      <div className='search-bar-input'>
        <input name='search' id={inputId} autoComplete='off' />
        <label className='search-bar-input' htmlFor={inputId}>
          <SearchIcon className='search-bar-input-icon' />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
