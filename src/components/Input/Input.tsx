import checkMark from '../../assets/images/check-mark.svg';
import crossMark from '../../assets/images/cross-mark.svg';

import { InputVariant } from './types';

import type { TInput } from './types';

import './Input.scss';

const Input = ({
  type,
  label,
  placeholder,
  description,
  className,
  variant = InputVariant.Default,
  ...props
}: TInput) => {
  const inputClass = {
    [InputVariant.Succes]: 'succes',
    [InputVariant.Error]: 'error',
    [InputVariant.Default]: '',
  };

  const imgVariant = {
    // TODO touch

    [InputVariant.Succes]: checkMark,
    [InputVariant.Error]: crossMark,
    [InputVariant.Default]: null,
  };

  return (
    <div className={`input-contain ${className || ''}`}>
      <label className='input-label' htmlFor='input'>
        {label}
      </label>

      {description && <div className='res-password'>{description}</div>}

      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`input input-${inputClass[variant]} `}
      />

      {imgVariant && <img src={imgVariant[variant]} className={inputClass[variant]} alt='' />}
    </div>
  );
};

export default Input;
