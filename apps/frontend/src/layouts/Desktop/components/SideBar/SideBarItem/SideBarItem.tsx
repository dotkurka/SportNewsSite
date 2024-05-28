import { Link } from 'react-router-dom';

import '../SideBar.scss';
import type { ISideBarItem } from './types';

const SideBarItem = ({ item, isActive, onClick }: ISideBarItem) => {
  if (item.conferences) {
    return (
      <button
        className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
        key={item.id}
        onClick={onClick}
      >
        {item.title}
      </button>
    );
  }
  return (
    <Link
      className={`sidebar-item ${isActive ? 'sidebar-item-focus' : ''}`}
      key={item.id}
      onClick={onClick}
      to={item.path}
    >
      {item.title}
    </Link>
  );
};

export default SideBarItem;
