import type { ISwitchButton } from 'components/SwitchButton/types';
import './SwitchButton.scss';

const SwitchButton = ({
  checked,
  onChange,
  disabled,
  name,
  className = '',
  id = 'switchBtn',
}: ISwitchButton) => {
  return (
    <label htmlFor={id} className={`switch ${className}`}>
      <input
        id={id}
        checked={checked}
        hidden
        name={name}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        type='checkbox'
      />
      <span className='slider' />
    </label>
  );
};

export default SwitchButton;
