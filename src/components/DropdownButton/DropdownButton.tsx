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
    <div ref={selectRef} className={`dropdown-button ${className}`}>
      <div className='dropdown-button-contain'>
        <button
          type='button'
          disabled={disabled}
          className='dropdown-button-btn'
          onClick={() => handleShowMenu()}
        >
          <span className={`${showdrop ? 'selected' : ''}`}>&#183;&#183;&#183;</span>
        </button>
        {showdrop && (
          <div className={`dropdown-button-list ${className && `${className}-list`}`}>
            {options.map((item, index) => (
              <button
                type='button'
                key={index}
                disabled={item.disabled}
                className='dropdown-button-item'
                onClick={() => {
                  item.onClick?.();
                  handleShowMenu();
                }}
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
