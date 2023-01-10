import { Link } from 'react-router-dom';

import type { ISidebarData } from '../../features/SideBarNav/SidebarData';

import './SubSideBar.scss';

interface ISubSideBar {
  subData: ISidebarData;
}

const SubSideBar = ({ subData }: ISubSideBar) => {
  return (
    <div className='sub-sidebar'>
      <div className='sub-sidebar-list'>
        {subData.subItem?.map(({ title, path }) => (
          <Link to={path} key={path} className='sub-sidebar-item'>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubSideBar;
