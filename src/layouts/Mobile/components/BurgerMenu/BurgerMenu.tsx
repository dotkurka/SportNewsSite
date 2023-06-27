import { useState } from 'react';

import { LangBar } from 'layouts/Mobile/components';
import BurgerMenuItem from 'layouts/Mobile/components/BurgerMenu/BurgerMenuItem';
import SecondMenu from 'layouts/Mobile/components/BurgerMenu/SecondMenu';
import { Langue } from 'layouts/Mobile/components/LangBar/types';

import type { ISidebarData } from 'config/SideBarData/types';
import type { IBurger } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const BurgerMenu = ({ data, show }: IBurger) => {
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
    <div className={`burger-menu ${show ? 'show' : ''} `}>
      <div className={`burger-menu-contain ${secondMenu.subItem ? '' : 'show'}`}>
        {data.map((item) => (
          <BurgerMenuItem onClick={() => getSecondMenu(item)} key={item.path} item={item} />
        ))}
      </div>
      <SecondMenu
        className={`${secondMenu.subItem ? 'show' : ''}`}
        close={handleCloseSecond}
        check={check}
        title={secondTitle}
        showDrop={showDropMenu}
        secondData={secondMenu.subItem}
      />
      <div className='burger-menu-lang'>
        <LangBar lang={[Langue.en, Langue.de, Langue.ua]} initialLang={Langue.en} />
      </div>
    </div>
  );
};

export default BurgerMenu;
