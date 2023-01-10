import { Link } from 'react-router-dom';

import type { ISidebarData } from '../../features/SideBarNav/SidebarData';

import './SideBar.scss';

interface ISideBarItem {
  item: ISidebarData;
  onClick: () => void;
  check?: boolean;
}

const SideBarItem = ({ item, check, ...props }: ISideBarItem) => {
  return (
    <Link
      {...props}
      to={item.path}
      key={item.path}
      className={`sidebar-item ${check ? 'sidebar-item-focus' : ''}`}
    >
      {item.title}
    </Link>
  );
};

export default SideBarItem;
