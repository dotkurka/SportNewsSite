import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import { Input } from 'components';
import useClickOutside from 'hooks/useClickOutside';

import type { ISelect } from 'components/Select/types';

import './Select.scss';

const Select = ({ options, placeholder, label }: ISelect) => {
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
      <div className='select-input-contain'>
        <Input
          onClick={() => handleShowMenu()}
          value={currentSelect}
          placeholder={placeholder}
          label={label}
          type='text'
          readOnly
          className='select-input'
        />

        <img className={label ? 'label' : ''} src={arrowFlag} alt='' />
      </div>

      {selectShow && (
        <div className='select-list'>
          {options.map((item) => (
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
