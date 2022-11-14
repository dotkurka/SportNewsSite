import type { IInput } from './types';

import './Input.scss';

const Input = ({ type, label, placeholder, validation }: IInput) => {
  return (
    <div className='input-contain'>
      <label className='input-label' htmlFor='domId'>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className='input' data-validation={validation} />
      <span />
    </div>
  );
};

export default Input;
