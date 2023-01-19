import SubMenuItem from 'layouts/MainLayout/components/SideBar/SubMenuItem/SubMenuItem';

import type { ISidebarData } from 'config/SideBarData/types';

import './SubMenu.scss';

interface ISubMenu {
  subData: ISidebarData[] | undefined;
  onClick: (item: ISidebarData) => void;
  checked?: string | null;
  className?: string;
}

const SubMenu = ({ subData, checked, className = '', onClick }: ISubMenu) => {
  if (!subData) {
    return null;
  }
  return (
    <div className={`sub-menu ${className}`}>
      {subData.map((item) => (
        <SubMenuItem
          className={className}
          isActive={item.title === checked}
          onClick={() => onClick(item)}
          key={item.path}
          subData={item}
        />
      ))}
    </div>
  );
};

export default SubMenu;
