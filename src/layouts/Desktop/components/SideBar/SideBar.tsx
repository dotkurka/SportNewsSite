import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useClickOutside from 'hooks/useClickOutside';
import SideBarFollow from 'layouts/Desktop/components/SideBar/SideBarFollow/SideBarFollow';
import SideBarItem from 'layouts/Desktop/components/SideBar/SideBarItem/SideBarItem';
import SubMenu from 'layouts/Desktop/components/SideBar/SubMenu/SubMenu';
import { unsetOverflow, setOverflowHidden } from 'utils/changeOverflow';

import type { ISideBar } from './types';
import type { ISidebarData } from 'config/SideBarData/types';

import './SideBar.scss';

const SideBar = ({ data }: ISideBar) => {
  const [subMenu, setSubMenu] = useState<ISidebarData | null>(null);
  const [secondSubMenu, setSecondSubMenu] = useState<ISidebarData | null>(null);
  const [checked, setChecked] = useState<string | null>(null);
  const [checkedSub, setCheckedSub] = useState<string | null>(null);

  const location = useLocation();

  // console.log(location);

  const closeSubMenu = useCallback(() => {
    if (subMenu) {
      setSubMenu(null);
      setSecondSubMenu(null);
      setCheckedSub(null);
      unsetOverflow();
      setChecked(null);
    }
  }, [subMenu, secondSubMenu]);

  const getSecondSubItem = (item: ISidebarData) => {
    if (item.title === secondSubMenu?.title) {
      setSecondSubMenu(null);
      setCheckedSub(null);
    } else if (!item.subItem?.length) {
      closeSubMenu();
    } else {
      setSecondSubMenu(item);
      setCheckedSub(item.title);
    }
  };

  const setOverflow = (item: ISidebarData) => {
    if (item.subItem) {
      setOverflowHidden();
    } else {
      unsetOverflow();
    }
  };

  const getSubItem = (item: ISidebarData) => {
    if (item.title === subMenu?.title) {
      closeSubMenu();
      setChecked(null);
    } else {
      setSecondSubMenu(null);
      setSubMenu(item);
      setChecked(item.title);
      setOverflow(item);
    }
  };

  const outsideClickRef = useClickOutside(closeSubMenu);

  return (
    <div className='sidebar'>
      <div className={`sidebar-bg ${subMenu?.subItem?.length ? 'active' : ''}`}>
        <div ref={outsideClickRef} className='sidebar-contain'>
          <div className={`sidebar-list ${subMenu?.subItem?.length ? 'active' : ''}`}>
            {data?.map((item) => (
              <SideBarItem
                onClick={() => getSubItem(item)}
                isActive={item.title === checked || item.path === location.pathname}
                item={item}
                key={item.path}
              />
            ))}
            <SideBarFollow />
          </div>
          <SubMenu checked={checkedSub} onClick={getSecondSubItem} subData={subMenu?.subItem} />
          <SubMenu
            onClick={closeSubMenu}
            className='second-menu'
            subData={secondSubMenu?.subItem}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
