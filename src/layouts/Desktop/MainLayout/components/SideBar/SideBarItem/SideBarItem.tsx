import { Link } from 'react-router-dom';

import '../SideBar.scss';
import type { ISideBarItem } from './types';

const SideBarItem = ({ item, isActive, onClick }: ISideBarItem) => {
  return (
    <Link
      onClick={onClick}
      to={item.subItem ? '..' : item.path}
      key={item.path}
      className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
    >
      {item.title}
    </Link>
  );
};

export default SideBarItem;
