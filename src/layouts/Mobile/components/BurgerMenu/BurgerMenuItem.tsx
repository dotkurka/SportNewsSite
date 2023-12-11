import { Link } from 'react-router-dom';

import type { IBurgerItem } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const BurgerMenuItem = ({ item, onClick }: IBurgerItem) => {
  if (item.conference) {
    return (
      <button
        onClick={onClick}
        className={`burger-menu-item ${item.conference ? 'second-menu' : ''}`}
      >
        {item.title}
      </button>
    );
  }
  return (
    <Link
      onClick={onClick}
      className={`burger-menu-item ${item.conference ? 'second-menu' : ''}`}
      to={item.path}
    >
      {item.title}
    </Link>
  );
};

export default BurgerMenuItem;
