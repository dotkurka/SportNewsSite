import { Link } from 'react-router-dom';

import type { ISidebarData } from 'config/SideBarData/types';
import './BurgerMenu.scss';

interface IBurgerItem {
  item: ISidebarData;
}

const BurgerMenuItem = ({ item }: IBurgerItem) => {
  return (
    <Link className={`burger-menu-item ${item.subItem ? 'sub-menu' : ''}`} to={item.path}>
      {item.title}
    </Link>
  );
};

export default BurgerMenuItem;
