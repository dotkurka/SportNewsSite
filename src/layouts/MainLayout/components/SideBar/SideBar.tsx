import { useState } from 'react';

import SideBarFollow from './SideBarFollow/SideBarFollow';
import SideBarItem from './SideBarItem/SideBarItem';
import SubSideBar from './SubSideBar/SubSideBar';

import './SideBar.scss';
import type { ISidebarData } from '../../../../config/SideBarData/types';
import type { ISidebar } from './types';

const SideBar = ({ data }: ISidebar) => {
  const [subBar, setSubBar] = useState<ISidebarData>({ title: '', path: '' });
  const [selected, setSelected] = useState<string | null>(null);

  const closeSubItem = () => {
    setSubBar({ title: '', path: '' });
  };

  const setSubItem = (item: ISidebarData) => {
    if (item.title === subBar.title) {
      closeSubItem();
      setSelected(null);
    } else {
      setSubBar(item);
      setSelected(item.title);
    }
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-list'>
        {data.map((dataSide) => (
          <SideBarItem
            onClick={() => setSubItem(dataSide)}
            isActive={dataSide.title === selected}
            item={dataSide}
            key={dataSide.path}
          />
        ))}

        <SideBarFollow />
      </div>
      {subBar.subItem && <SubSideBar onClick={closeSubItem} subData={subBar} />}
    </div>
  );
};

export default SideBar;
