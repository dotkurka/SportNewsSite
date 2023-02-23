import { Link } from 'react-router-dom';

import type { IBurgerItem } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const BurgerMenuItem = ({ item, onClick }: IBurgerItem) => {
  return (
    <Link
      onClick={onClick}
      className={`burger-menu-item ${item.subItem ? 'second-menu' : ''}`}
      to={item.subItem ? '/#' : item.path}
    >
      {item.title}
    </Link>
  );
};

export default BurgerMenuItem;
