import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import useClickOutside from 'hooks/useClickOutside';

import './Select.scss';

interface ISelect {
  selectItem: string[];
}

const Select = ({ selectItem }: ISelect) => {
  const [currentSelect, setCurrentSelect] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [selectShow, setSelectShow] = useState(false);

  const selectRef = useClickOutside(() => setSelectShow(false));
  // TODO add an operation that will change the language of the entire site
  const changeSelect = (item: string) => {
    setCurrentSelect(item);
    setSelectShow(false);
  };

  const handleShowMenu = () => {
    setSelectShow((land) => !land);
    setSelected(currentSelect);
  };
  return (
    <div ref={selectRef} className='select'>
      <input
        onClick={() => handleShowMenu()}
        placeholder='Not Selected'
        value={currentSelect}
        className='select-item'
      />

      <img src={arrowFlag} alt='' />

      {selectShow && (
        <div className='select-list'>
          {selectItem.map((item) => (
            <button
              key={item}
              disabled={selected === item}
              className={`select-item list ${selected === item ? 'selected' : ''}`}
              onClick={() => changeSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
