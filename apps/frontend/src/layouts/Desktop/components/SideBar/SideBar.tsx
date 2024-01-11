import { useCallback, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import useClickOutside from 'hooks/useClickOutside';
import SideBarFollow from 'layouts/Desktop/components/SideBar/SideBarFollow/SideBarFollow';
import SideBarItem from 'layouts/Desktop/components/SideBar/SideBarItem/SideBarItem';
import SubMenu from 'layouts/Desktop/components/SideBar/SubMenu/SubMenu';
import { lockScrollbar, unlockScrollbar } from 'utils/lockScrollbar';

import type { ISideBar } from './types';
import type { ICaregoryData, IConferenceData, ITeamData } from 'features/category/types';

import './SideBar.scss';

const SideBar = ({ data }: ISideBar) => {
  const [subMenu, setSubMenu] = useState<IConferenceData[] | null>(null);
  const [secondSubMenu, setSecondSubMenu] = useState<ITeamData[] | null>(null);
  const [checked, setChecked] = useState<string | null>(null);
  const [checkedSub, setCheckedSub] = useState<string | null>(null);

  const { category: categoryParams } = useParams();
  const location = useLocation();

  const closeSubMenu = useCallback(() => {
    if (subMenu) {
      setSubMenu(null);
      setSecondSubMenu(null);
      setCheckedSub(null);
      unlockScrollbar();
      setChecked(null);
    }
  }, [subMenu, secondSubMenu]);

  const getSecondSubItem = (item: IConferenceData) => {
    if (item.title === checkedSub) {
      setSecondSubMenu(null);
      setCheckedSub(null);
    } else if (!item.team?.length) {
      closeSubMenu();
    } else {
      setSecondSubMenu(item.team);
      setCheckedSub(item.title);
    }
  };

  const setScrollbar = (item: ICaregoryData) => {
    if (item.conference) {
      lockScrollbar();
    } else {
      unlockScrollbar();
    }
  };

  const getSubItem = (item: ICaregoryData) => {
    if (item.title === checked) {
      closeSubMenu();
      setChecked(null);
    } else {
      setSecondSubMenu(null);
      setSubMenu(item?.conference || null);
      setChecked(item.title);
      setScrollbar(item);
    }
  };

  const outsideClickRef = useClickOutside(closeSubMenu);

  const styleActive = subMenu?.length ? 'active' : '';

  return (
    <div className='sidebar'>
      <div className={`sidebar-bg ${styleActive}`}>
        <div className='sidebar-contain' ref={outsideClickRef}>
          <div className={`sidebar-list ${styleActive}`}>
            {data?.map((item) => {
              const checkPath =
                item.path.replace('/', '') === categoryParams || item.path === location.pathname;
              return (
                <SideBarItem
                  isActive={item.title === checked || checkPath}
                  item={item}
                  key={item.path}
                  onClick={() => getSubItem(item)}
                />
              );
            })}
            <SideBarFollow />
          </div>
          <SubMenu checked={checkedSub} onClick={getSecondSubItem} subData={subMenu} />
          <SubMenu className='second-menu' onClick={closeSubMenu} subData={secondSubMenu} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
