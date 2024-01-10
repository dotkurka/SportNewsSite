import { Link } from 'react-router-dom';

import '../SideBar.scss';
import type { ISideBarItem } from './types';

const SideBarItem = ({ item, isActive, onClick }: ISideBarItem) => {
  if (item.conference) {
    return (
      <button
        onClick={onClick}
        key={item.id}
        className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
      >
        {item.title}
      </button>
    );
  }
  return (
    <Link
      onClick={onClick}
      to={item.path}
      key={item.id}
      className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
    >
      {item.title}
    </Link>
  );
};

export default SideBarItem;
