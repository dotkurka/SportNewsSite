import BurgerMenuItem from 'layouts/Mobile/MobilePageLayout/BurgerMenu/BurgerMenuItem';

import type { ISidebarData } from 'config/SideBarData/types';
import './BurgerMenu.scss';

interface IBurger {
  data: ISidebarData[];
}

const BurgerMenu = ({ data }: IBurger) => {
  return (
    <div className='burger-menu'>
      <div className='burger-menu-contain'>
        {data.map((item) => (
          <BurgerMenuItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
