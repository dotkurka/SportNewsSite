import { Link } from 'react-router-dom';

import type { ISidebarData } from 'config/SideBarData/types';
import './BurgerMenu.scss';

interface IBurgerItem {
  item: ISidebarData;
  onClick: () => void;
}

const BurgerMenuItem = ({ item, onClick }: IBurgerItem) => {
  return (
    <Link
      onClick={onClick}
      className={`burger-menu-item ${item.subItem ? 'sub-menu' : ''}`}
      to={item.subItem ? '/#' : item.path}
    >
      {item.title}
    </Link>
  );
};

export default BurgerMenuItem;
