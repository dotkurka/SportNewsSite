import { useState } from 'react';

import useClickOutside from 'hooks/useClickOutside';
import SideBarFollow from 'layouts/MainLayout/components/SideBar/SideBarFollow/SideBarFollow';
import SideBarItem from 'layouts/MainLayout/components/SideBar/SideBarItem/SideBarItem';
import SubMenu from 'layouts/MainLayout/components/SideBar/SubMenu/SubMenu';

import './SideBar.scss';
import type { ISideBar } from './types';
import type { ISidebarData } from 'config/SideBarData/types';

const SideBar = ({ data }: ISideBar) => {
  const [subMenu, setSubMenu] = useState<ISidebarData>({ title: '', path: '' });
  const [secondSubMenu, setSecondSubMenu] = useState<ISidebarData>({ title: '', path: '' });
  const [checked, setChecked] = useState<string | null>(null);
  const [checkedSub, setCheckedSub] = useState<string | null>(null);

  const closeSubMenu = () => {
    setSubMenu({ title: '', path: '' });
    setSecondSubMenu({ title: '', path: '' });
    setCheckedSub(null);
  };

  const getSecondSubItem = (item: ISidebarData) => {
    if (item.title === secondSubMenu.title) {
      setSecondSubMenu({ title: '', path: '' });
      setCheckedSub(null);
    } else if (!item.subItem) {
      closeSubMenu();
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

  const domNode = useClickOutside(() => closeSubMenu());

  return (
    <div className='sidebar'>
      <div className={`sidebar-bg ${subMenu.subItem ? 'active' : ''}`}>
        <div ref={domNode} className='sidebar-contain'>
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
          <SubMenu checked={checkedSub} onClick={getSecondSubItem} subData={subMenu.subItem} />
          <SubMenu onClick={closeSubMenu} className='second-menu' subData={secondSubMenu.subItem} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
