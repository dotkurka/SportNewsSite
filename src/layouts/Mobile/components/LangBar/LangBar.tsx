import { useState } from 'react';

import type { ILangSelector } from 'layouts/Mobile/components/LangBar/types';

import './LangBar.scss';

const LangBar = ({ lang, initialLang }: ILangSelector) => {
  const [selected, setSelected] = useState<string>(initialLang);
  // TODO
  const handleChangeLang = (item: string) => {
    setSelected(item);
  };
  return (
    <div className='lang-bar'>
      {lang.map((item) => (
        <button
          key={item}
          className={`lang-bar-item ${selected === item ? 'selected' : ''}`}
          onClick={() => handleChangeLang(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LangBar;
