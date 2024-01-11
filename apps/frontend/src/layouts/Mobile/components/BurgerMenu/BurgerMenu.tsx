import { createContext, useCallback, useState } from 'react';

import { Langue } from 'components/LangSelector/enums';
import { LangBar } from 'layouts/Mobile/components';
import BurgerMenuItem from 'layouts/Mobile/components/BurgerMenu/BurgerMenuItem';
import SecondMenu from 'layouts/Mobile/components/BurgerMenu/SecondMenu';

import type { ICaregoryData, IConferenceData } from 'features/category/types';
import type { BurgerContextType, IBurger } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

export const BurgerMenuContext = createContext<BurgerContextType | undefined>(undefined);

const BurgerMenu = ({ data, handleShow }: IBurger) => {
  const [secondMenu, setSecondMenu] = useState<IConferenceData[] | null>(null);
  const [secondTitle, setSecondTitle] = useState<string | null>(null);
  const [check, setCheck] = useState<string | null>(null);

  const handleHiddenMenu = useCallback(() => {
    handleShow(false);
  }, [handleShow]);

  const getSecondMenu = (item: ICaregoryData) => {
    if (item.conference) {
      setSecondMenu(item?.conference || null);
      setSecondTitle(item.title);
    } else {
      handleHiddenMenu();
    }
  };

  const showDropMenu = (title: string) => {
    if (title === check) {
      setCheck(null);
    } else {
      setCheck(title);
    }
  };

  const handleCloseSecond = () => {
    setSecondMenu(null);
    setSecondTitle(null);
  };

  return (
    <div className='burger-menu'>
      <div className={`burger-menu-contain ${secondMenu ? '' : 'show'}`}>
        {data?.map((item) => (
          <BurgerMenuItem item={item} key={item.id} onClick={() => getSecondMenu(item)} />
        ))}
      </div>
      <BurgerMenuContext.Provider value={handleHiddenMenu}>
        <SecondMenu
          check={check}
          className={`${secondMenu ? 'show' : ''}`}
          close={handleCloseSecond}
          onClick={showDropMenu}
          secondData={secondMenu}
          title={secondTitle}
        />
      </BurgerMenuContext.Provider>
      <div className='burger-menu-lang'>
        <LangBar initialLang={Langue.en} lang={[Langue.en, Langue.de, Langue.ua]} />
      </div>
    </div>
  );
};

export default BurgerMenu;
