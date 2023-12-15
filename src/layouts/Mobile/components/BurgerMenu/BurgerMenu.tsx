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
          <BurgerMenuItem onClick={() => getSecondMenu(item)} key={item.id} item={item} />
        ))}
      </div>
      <BurgerMenuContext.Provider value={handleHiddenMenu}>
        <SecondMenu
          className={`${secondMenu ? 'show' : ''}`}
          close={handleCloseSecond}
          check={check}
          title={secondTitle}
          onClick={showDropMenu}
          secondData={secondMenu}
        />
      </BurgerMenuContext.Provider>
      <div className='burger-menu-lang'>
        <LangBar lang={[Langue.en, Langue.de, Langue.ua]} initialLang={Langue.en} />
      </div>
    </div>
  );
};

export default BurgerMenu;
