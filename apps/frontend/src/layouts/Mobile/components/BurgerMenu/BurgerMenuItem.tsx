import { Link } from 'react-router-dom';

import type { IBurgerItem } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const BurgerMenuItem = ({ item, onClick }: IBurgerItem) => {
  if (item.conferences) {
    return (
      <button
        className={`burger-menu-item ${item.conferences ? 'second-menu' : ''}`}
        onClick={onClick}
      >
        {item.title}
      </button>
    );
  }
  return (
    <Link
      className={`burger-menu-item ${item.conferences ? 'second-menu' : ''}`}
      onClick={onClick}
      to={item.path}
    >
      {item.title}
    </Link>
  );
};

export default BurgerMenuItem;
