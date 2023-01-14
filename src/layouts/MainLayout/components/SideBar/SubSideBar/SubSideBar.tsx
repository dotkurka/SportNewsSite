import { Link } from 'react-router-dom';

import './SubSideBar.scss';
import type { ISubSideBar } from './types';

const SubSideBar = ({ subData, isActive, onClick }: ISubSideBar) => {
  return (
    <Link
      onClick={onClick}
      to={subData.path}
      key={subData.path}
      className={`sub-sidebar-item ${isActive ? 'sub-sidebar-item-focus' : ''}`}
    >
      {subData.title}
    </Link>
  );
};

export default SubSideBar;
