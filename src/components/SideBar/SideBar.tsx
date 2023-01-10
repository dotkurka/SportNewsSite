import { useState } from 'react';

import SubSideBar from '../SubSideBar/SubSideBar';

import SideBarFollow from './SideBarFollow';
import SideBarItem from './SideBarItem';

import type { ISidebarData } from '../../features/SideBarNav/SidebarData';

import './SideBar.scss';

interface ISidebar {
  data: ISidebarData[];
}

const SideBar = ({ data }: ISidebar) => {
  const [subBar, setSubBar] = useState<ISidebarData>({ title: '', path: '' });

  const subItem = (item: ISidebarData) => {
    setSubBar(item);
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-list'>
        {data.map((dataSide) => (
          <SideBarItem onClick={() => subItem(dataSide)} item={dataSide} key={dataSide.path} />
        ))}

        <SideBarFollow />
      </div>
      {subBar.subItem && <SubSideBar subData={subBar} />}
    </div>
  );
};

export default SideBar;
