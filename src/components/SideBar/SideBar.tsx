import { Link } from 'react-router-dom';

import SideBarFollow from './SideBarFollow';
import SideBarItem from './SideBarItem';

import type { ISidebarData } from '../../features/SideBarNav/SidebarData';

import './SideBar.scss';

interface ISidebar {
  data: ISidebarData[];
}

const SideBar = ({ data }: ISidebar) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-list'>
        <Link to='dff' className='sidebar-item'>
          Home
        </Link>

        {data.map((dataDise) => (
          <SideBarItem item={dataDise} key={dataDise.path} />
        ))}

        <SideBarFollow />
      </div>
    </div>
  );
};

export default SideBar;
