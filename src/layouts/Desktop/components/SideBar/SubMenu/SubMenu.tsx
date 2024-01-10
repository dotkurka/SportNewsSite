import SubMenuItem from 'layouts/Desktop/components/SideBar/SubMenuItem/SubMenuItem';

import type { IConferenceData, ITeamData } from 'features/category/types';
import type { ISubMenu } from 'layouts/Desktop/components/SideBar/SubMenu/types';

import './SubMenu.scss';

const SubMenu = <T extends IConferenceData | ITeamData>({
  subData,
  checked,
  className = '',
  onClick,
}: ISubMenu<T>) => {
  if (!subData?.length) {
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
