import { Link } from 'react-router-dom';

import './SubSideBar.scss';
import type { ISubSideBar } from './types';

const SubSideBar = ({ subData, ...props }: ISubSideBar) => {
  return (
    <div className='sub-sidebar'>
      <div className='sub-sidebar-list'>
        {subData.subItem?.map(({ title, path }) => (
          <Link {...props} to={path} key={path} className='sub-sidebar-item'>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubSideBar;
