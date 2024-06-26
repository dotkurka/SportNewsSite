import { useId, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/select-text-arrow.svg';
import { changePassword, personal } from 'constants/routesPath';
import useClickOutside from 'hooks/useClickOutside';

import type { INavSearch } from 'layouts/Desktop/components/NavBar/NavBarSearch/types';

import './SearchBar.scss';

const SearchBar = ({ onChange, result, isLoading }: INavSearch) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const inputId = useId();

  const { category, article } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const searchRef = useClickOutside(() => setFocus(false));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  const myProfile = pathname === personal || pathname === changePassword ? 'My Profile' : category;
  const checkingLocation = pathname.split('/')[1] || 'Home';
  const checkingPath = myProfile || checkingLocation;
  const checkingUnCorrectness = value && focus && !isLoading && !result?.length;

  return (
    <div className='search-bar'>
      <div className='search-bar-category'>
        {category && article ? (
          <button className='search-bar-category-title-btn' onClick={goToPreviousPage}>
            <ArrowIcon className='search-bar-category-arrow' />
            Back
          </button>
        ) : (
          <span className='search-bar-category-title'>{checkingPath}</span>
        )}
      </div>
      <div className='search-bar-input' ref={searchRef}>
        <input
          autoComplete='false'
          id={inputId}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          placeholder='Search'
          value={value}
        />
        <label className='search-bar-input-label' htmlFor={inputId}>
          <SearchIcon className='search-bar-input-icon' />
        </label>
      </div>
      {focus && result && (
        <div className='search-bar-list'>
          {result?.map((item) => (
            <Link
              className='search-bar-list-item'
              key={item.id}
              onClick={() => setFocus(false)}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
      {checkingUnCorrectness && (
        <div className='search-bar-list'>
          <span className='search-bar-list-item'>Not Found</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
