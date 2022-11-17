import { InputVariant } from './types';

import type { IInput } from './types';

import './Input.scss';

const Input = ({ type, label, placeholder, variant = InputVariant.Default }: IInput) => {
  const inputClass = {
    [InputVariant.Succes]: 'succes',
    [InputVariant.Error]: 'error',
    [InputVariant.Default]: '',
  };

  return (
    <div className='input-contain'>
      <label className='input-label' htmlFor='domId'>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={`input ${inputClass[variant]} `} />
      <span />
    </div>
  );
};

export default Input;
