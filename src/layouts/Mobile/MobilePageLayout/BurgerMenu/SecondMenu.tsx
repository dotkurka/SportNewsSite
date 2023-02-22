import SecondMenuItem from 'layouts/Mobile/MobilePageLayout/BurgerMenu/SecondMenuItem';

import type { ISidebarData } from 'config/SideBarData/types';

import './BurgerMenu.scss';

export interface ISecondMenu {
  secondData: ISidebarData[] | undefined;
  title: string | null;
  check: string | null;
  showDrop: (item: string) => void;
  close: () => void;
}

const SecondMenu = ({ secondData, title, showDrop, check, close }: ISecondMenu) => {
  if (!secondData) {
    return null;
  }

  return (
    <div className='burger-menu-second'>
      <button onClick={() => close()} className='burger-menu-second-btn'>
        Back to main menu
      </button>
      <span className='burger-menu-second-title'>{title}</span>
      <div className='burger-menu-second-contain'>
        {secondData.map((item) => (
          <SecondMenuItem key={item.path} secondData={item} showDrop={showDrop} check={check} />
        ))}
      </div>
    </div>
  );
};

export default SecondMenu;
