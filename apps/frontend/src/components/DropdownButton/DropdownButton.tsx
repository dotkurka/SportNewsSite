import React, { useState } from 'react';

import useClickOutside from 'hooks/useClickOutside';

import type { IDropdownButton } from 'components/DropdownButton/types';

import './DropdownButton.scss';

const DropdownButton = ({ options, disabled, className = '' }: IDropdownButton) => {
  const [showdrop, setShowdrop] = useState(false);

  const selectRef = useClickOutside(() => setShowdrop(false));

  const handleShowMenu = () => {
    setShowdrop((show) => !show);
  };

  return (
    <div className={`dropdown-button ${className}`} ref={selectRef}>
      <div className='dropdown-button-contain'>
        <button
          className='dropdown-button-btn'
          disabled={disabled}
          onClick={() => handleShowMenu()}
          type='button'
        >
          <span className={`${showdrop ? 'selected' : ''}`}>&#183;&#183;&#183;</span>
        </button>
        {showdrop && (
          <div className={`dropdown-button-list ${className && `${className}-list`}`}>
            {options.map((item, index) => (
              <button
                className='dropdown-button-item'
                disabled={item.disabled}
                key={index}
                onClick={() => {
                  item.onClick?.();
                  handleShowMenu();
                }}
                type='button'
              >
                {item.value}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
