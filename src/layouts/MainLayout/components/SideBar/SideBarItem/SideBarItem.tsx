import { Link } from 'react-router-dom';

import '../SideBar.scss';
import type { ISideBarItem } from './types';

const SideBarItem = ({ item, isActive, onClick, ...props }: ISideBarItem) => {
  return (
    <Link
      onClick={onClick}
      {...props}
      to={item.path}
      key={item.path}
      className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
    >
      {item.title}
    </Link>
  );
};

export default SideBarItem;
