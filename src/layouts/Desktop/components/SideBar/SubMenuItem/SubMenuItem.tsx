import { Link } from 'react-router-dom';

import type { ISubMenuItem } from 'layouts/Desktop/components/SideBar/SubMenuItem/types';

import './SubMenuItem.scss';

const SubMenuItem = ({ subData, isActive, className, onClick }: ISubMenuItem) => {
  if (subData.subItem) {
    return (
      <button
        onClick={onClick}
        key={subData.id}
        className={`sub-menu-item ${isActive ? 'sub-menu-item-focus' : ''} ${className}`}
      >
        {subData.title}
      </button>
    );
  }
  return (
    <Link
      onClick={onClick}
      to={subData.path}
      key={subData.id}
      className={`sub-menu-item ${isActive ? 'sub-menu-item-focus' : ''} ${className}`}
    >
      {subData.title}
    </Link>
  );
};

export default SubMenuItem;
