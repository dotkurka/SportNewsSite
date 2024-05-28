import { useId } from 'react';

import type { ISwitchButton } from 'components/SwitchButton/types';

import './SwitchButton.scss';

const SwitchButton = ({ checked, onChange, disabled, name, className = '', id }: ISwitchButton) => {
  const switchId = useId();

  const checkId = id || switchId;

  return (
    <label className={`switch ${className}`} htmlFor={checkId}>
      <input
        checked={checked}
        disabled={disabled}
        hidden
        id={checkId}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        type='checkbox'
      />
      <span className='slider' />
    </label>
  );
};

export default SwitchButton;
