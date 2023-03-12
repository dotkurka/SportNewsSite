import { Link } from 'react-router-dom';

import './SubMenuItem.scss';
import type { ISubMenu } from './types';

const SubMenuItem = ({ subData, isActive, className, onClick }: ISubMenu) => {
  return (
    <Link
      onClick={onClick}
      to={subData.subItem ? '..' : subData.path}
      key={subData.path}
      className={`sub-menu-item ${isActive ? 'sub-menu-item-focus' : ''} ${className}`}
    >
      {subData.title}
    </Link>
  );
};

export default SubMenuItem;
