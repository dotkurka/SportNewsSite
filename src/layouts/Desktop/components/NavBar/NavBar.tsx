import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLazyGetArticlesQuery } from 'api/articlesApi';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-follow-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/google-follow-icon.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter-follow-icon.svg';
import { LangSelector, Logo } from 'components';
import { Langue } from 'components/LangSelector/types';
import { facebookPath, googlePath, twitterPath } from 'constants/socialContactPath';
import useDebounce from 'hooks/useDebounce';
import NavBarSearch from 'layouts/Desktop/components/NavBar/NavBarSearch/NavBarSearch';
import NavBarUser from 'layouts/Desktop/components/NavBar/NavBarUser/NavBarUser';
import { selectCurrentUser } from 'redux/authSlice';

import './NavBar.scss';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const user = useSelector(selectCurrentUser);

  const debounceValue = useDebounce(searchValue, 1000);
  const [getArticles, { data: searchResult, isError }] = useLazyGetArticlesQuery();

  useEffect(() => {
    if (debounceValue.length >= 2) {
      getArticles({
        search: debounceValue,
        limit: 10,
      });
    }
  }, [debounceValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Logo />
      </div>
      <div className='navbar-contain'>
        <div className='navbar-contain-search'>
          <NavBarSearch result={searchResult} isError={isError} onChange={handleSearch} />
        </div>
        <div className='navbar-contain-social'>
          <div className='navbar-social'>
            <span>Share</span>
            <a href={facebookPath}>
              <FacebookIcon className='navbar-social-item' />
            </a>
            <a href={googlePath}>
              <GoogleIcon className='navbar-social-item' />
            </a>
            <a href={twitterPath}>
              <TwitterIcon className='navbar-social-item' />
            </a>
          </div>
        </div>
        <div className='navbar-contain-user'>
          <NavBarUser user={user} />
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
