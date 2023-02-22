import { useState } from 'react';

import BurgerMenuItem from 'layouts/Mobile/MobilePageLayout/BurgerMenu/BurgerMenuItem';
import SecondMenu from 'layouts/Mobile/MobilePageLayout/BurgerMenu/SecondMenu';

import type { ISidebarData } from 'config/SideBarData/types';
import './BurgerMenu.scss';

interface IBurger {
  data: ISidebarData[];
}

const BurgerMenu = ({ data }: IBurger) => {
  const [secondMenu, setSecondMenu] = useState<ISidebarData>({ title: '', path: '' });
  const [secondTitle, setSecondTitle] = useState<string | null>(null);
  const [check, setCheck] = useState<string | null>(null);

  const getSecondMenu = (item: ISidebarData) => {
    setSecondMenu(item);
    setSecondTitle(item.title);
  };

  const showDropMenu = (title: string) => {
    if (title === check) {
      setCheck(null);
    } else {
      setCheck(title);
    }
  };

  const handleCloseSecond = () => {
    setSecondMenu({ title: '', path: '' });
    setSecondTitle(null);
  };

  return (
    <div className='burger-menu'>
      <div className='burger-menu-contain'>
        {data.map((item) => (
          <BurgerMenuItem onClick={() => getSecondMenu(item)} key={item.path} item={item} />
        ))}
      </div>
      <SecondMenu
        close={handleCloseSecond}
        check={check}
        title={secondTitle}
        showDrop={showDropMenu}
        secondData={secondMenu.subItem}
      />
    </div>
  );
};

export default BurgerMenu;
