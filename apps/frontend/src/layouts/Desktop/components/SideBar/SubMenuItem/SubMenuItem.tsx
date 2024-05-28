import { Link } from 'react-router-dom';

import type { IConferenceData, ITeamData } from 'features/categories/types';
import type { ISubMenuItem } from 'layouts/Desktop/components/SideBar/SubMenuItem/types';

import './SubMenuItem.scss';

const SubMenuItem = <T extends IConferenceData | ITeamData>({
  subData,
  isActive,
  className,
  onClick,
}: ISubMenuItem<T>) => {
  if ('teams' in subData) {
    return (
      <button
        className={`sub-menu-item ${isActive ? 'sub-menu-item-focus' : ''} ${className}`}
        key={subData.id}
        onClick={onClick}
      >
        {subData.title}
      </button>
    );
  }
  return (
    <Link
      className={`sub-menu-item ${isActive ? 'sub-menu-item-focus' : ''} ${className}`}
      key={subData.id}
      onClick={onClick}
      to={subData.path}
    >
      {subData.title}
    </Link>
  );
};

export default SubMenuItem;
