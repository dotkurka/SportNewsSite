import { useState } from 'react';

import SideBarFollow from './SideBarFollow/SideBarFollow';
import SideBarItem from './SideBarItem/SideBarItem';
import SubSideBar from './SubSideBar/SubSideBar';

import './SideBar.scss';
import type { ISidebarData } from '../../../../config/SideBarData/types';
import type { ISidebar } from './types';

const SideBar = ({ data }: ISidebar) => {
  const [subBar, setSubBar] = useState<ISidebarData>({ title: '', path: '' });
  const [sub, setSub] = useState<ISidebarData>({ title: '', path: '' });
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const closeSubItem = () => {
    setSubBar({ title: '', path: '' });
    setSub({ title: '', path: '' });
  };

  const subuk = (item: ISidebarData) => {
    if (item.title === sub.title) {
      setSub({ title: '', path: '' });
      setSelectedSub(null);
    } else {
      setSub(item);
      setSelectedSub(item.title);
    }
  };

  const getSubItem = (item: ISidebarData) => {
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
        {data.map((item) => (
          <SideBarItem
            onClick={() => getSubItem(item)}
            isActive={item.title === selected}
            item={item}
            key={item.path}
          />
        ))}

        <SideBarFollow />
      </div>
      {subBar.subItem && (
        <div className='sub-sidebar'>
          <div className='sub-sidebar-list'>
            {subBar.subItem?.map((item) => (
              <SubSideBar
                isActive={item.title === selectedSub}
                onClick={() => subuk(item)}
                key={item.path}
                subData={item}
              />
            ))}
          </div>
        </div>
      )}
      {sub.subItem && subBar.subItem && (
        <div className='sub-sidebar'>
          <div className='sub-sidebar-list'>
            {sub.subItem?.map((item) => (
              <SubSideBar onClick={() => closeSubItem()} key={item.path} subData={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
