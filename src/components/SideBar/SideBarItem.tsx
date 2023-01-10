import { useState } from 'react';
import { Link } from 'react-router-dom';

import SubSideBar from '../SubSideBar/SubSideBar';

import type { ISidebarData } from '../../features/SideBarNav/SidebarData';

import './SideBar.scss';

interface ISideBarItem {
  item: ISidebarData;
}

const SideBarItem = ({ item }: ISideBarItem) => {
  const [subBar, setSubBar] = useState(false);

  const subBarVisible = () => {
    setSubBar(() => false);
    setSubBar(() => true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={item.subItem && subBarVisible}>
      <Link
        to={item.path}
        key={item.path}
        className={`sidebar-item ${subBar ? 'sidebar-item-focus' : ''}`}
      >
        {item.title}
      </Link>
      {subBar && <SubSideBar subData={item} />}
    </div>
  );
};

export default SideBarItem;
