import { useState } from 'react';

import type { Langue } from 'components/LangSelector/enums';
import type { ILangSelector } from 'layouts/Mobile/components/LangBar/types';

import './LangBar.scss';

const LangBar = ({ lang, initialLang }: ILangSelector) => {
  const [selected, setSelected] = useState<Langue>(initialLang);
  // TODO
  const handleChangeLang = (item: Langue) => {
    setSelected(item);
  };
  return (
    <div className='lang-bar'>
      {lang.map((item) => (
        <button
          className={`lang-bar-item ${selected === item ? 'selected' : ''}`}
          key={item}
          onClick={() => handleChangeLang(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LangBar;
