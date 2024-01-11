import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import useClickOutside from 'hooks/useClickOutside';

import './LangSelector.scss';
import type { Langue } from 'components/LangSelector/enums';
import type { ILangSelector } from 'components/LangSelector/types';

const LangSelector = ({ langueages, initialLang }: ILangSelector) => {
  const [langue, setLangue] = useState<Langue>(initialLang);
  const [selected, setSelected] = useState<Langue | null>(null);
  const [langShow, setLangShow] = useState(false);

  const langRef = useClickOutside(() => setLangShow(false));
  // TODO add an operation that will change the language of the entire site
  const changeLang = (item: Langue) => {
    setLangue(item);
    setLangShow(false);
  };

  const handleShowMenu = () => {
    setLangShow((land) => !land);
    setSelected(langue);
  };

  return (
    <div className='lang-selector' ref={langRef}>
      <button className='lang-selector-item' onClick={() => handleShowMenu()}>
        {langue}
        <img alt='' src={arrowFlag} />
      </button>

      {langShow && (
        <div className='lang-selector-list'>
          {langueages.map((item) => (
            <button
              className={`lang-selector-item list ${selected === item ? 'selected' : ''}`}
              disabled={selected === item}
              key={item}
              onClick={() => changeLang(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
