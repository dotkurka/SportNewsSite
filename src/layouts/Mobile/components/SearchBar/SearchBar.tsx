import { useId, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/select-text-arrow.svg';
import useClickOutside from 'hooks/useClickOutside';

import type { INavSearch } from 'layouts/Desktop/components/NavBar/NavBarSearch/types';

import './SearchBar.scss';

const SearchBar = ({ onChange, result, isLoading }: INavSearch) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const inputId = useId();

  const { category, article } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const searchRef = useClickOutside(() => setFocus(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  const checkLocation = location.pathname.split('/')[1] || 'Home';
  const checkPath = category || checkLocation;

  return (
    <div ref={searchRef} className='search-bar'>
      <div className='search-bar-category'>
        {category && article ? (
          <button onClick={goToPreviousPage} className='search-bar-category-title-btn'>
            <ArrowIcon className='search-bar-category-arrow' />
            Back
          </button>
        ) : (
          <span className='search-bar-category-title'>{checkPath}</span>
        )}
      </div>
      <div className='search-bar-input'>
        <input
          id={inputId}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          placeholder='Search'
          autoComplete='false'
        />
        <label className='search-bar-input-label' htmlFor={inputId}>
          <SearchIcon className='search-bar-input-icon' />
        </label>
      </div>
      {focus && result && (
        <div className='search-bar-list'>
          {result?.map((item) => {
            const path = `${item.category}/${item.path}`;
            return (
              <Link onClick={() => setFocus(false)} className='search-bar-list-item' to={path}>
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
      {value && focus && !isLoading && !result?.length && (
        <div className='search-bar-list'>
          <span className='search-bar-list-item'>Not Found</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
