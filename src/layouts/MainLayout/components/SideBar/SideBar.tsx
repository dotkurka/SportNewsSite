import { useState } from 'react';

import SideBarFollow from './SideBarFollow/SideBarFollow';
import SideBarItem from './SideBarItem/SideBarItem';
import SubMenuItem from './SubMenuItem/SubMenuItem';

import './SideBar.scss';
import type { ISidebarData } from '../../../../config/SideBarData/types';
import type { ISideBar } from './types';

const SideBar = ({ data }: ISideBar) => {
  const [subMenu, setSubMenu] = useState<ISidebarData>({ title: '', path: '' });
  const [secondSubMenu, setSecondSubMenu] = useState<ISidebarData>({ title: '', path: '' });
  const [checked, setChecked] = useState<string | null>(null);
  const [checkedSub, setCheckedSub] = useState<string | null>(null);

  const closeSubMenu = () => {
    setSubMenu({ title: '', path: '' });
    setSecondSubMenu({ title: '', path: '' });
  };

  const getSecondSubItem = (item: ISidebarData) => {
    if (item.title === secondSubMenu.title) {
      setSecondSubMenu({ title: '', path: '' });
      setCheckedSub(null);
    } else {
      setSecondSubMenu(item);
      setCheckedSub(item.title);
    }
  };

  const getSubItem = (item: ISidebarData) => {
    if (item.title === subMenu.title) {
      closeSubMenu();
      setChecked(null);
    } else {
      setSecondSubMenu({ title: '', path: '' });
      setSubMenu(item);
      setChecked(item.title);
    }
  };

  return (
    <div className={`sidebar ${subMenu.subItem ? 'active' : ''}`}>
      <div className={`sidebar-list ${subMenu.subItem ? 'active' : ''}`}>
        {data.map((item) => (
          <SideBarItem
            onClick={() => getSubItem(item)}
            isActive={item.title === checked}
            item={item}
            key={item.path}
          />
        ))}

        <SideBarFollow />
      </div>

      {subMenu.subItem && (
        <div className='sub-menu'>
          {subMenu.subItem?.map((item) => (
            <SubMenuItem
              isActive={item.title === checkedSub}
              onClick={() => getSecondSubItem(item)}
              key={item.path}
              subData={item}
            />
          ))}
        </div>
      )}
      {secondSubMenu.subItem && subMenu.subItem && (
        <div className='sub-menu second-menu'>
          {secondSubMenu.subItem?.map((item) => (
            <SubMenuItem
              className='second-menu'
              onClick={() => closeSubMenu()}
              key={item.path}
              subData={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
