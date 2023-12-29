import type { SelectVariant } from 'components/Select/enums';

export interface ISelect<T> {
  options: IOptions<T>;
  touched?: boolean;
  errors?: string | boolean;
  className?: string;
  defaultValue?: string;
  variant?: SelectVariant;
  disabled?: boolean;
  clearValue?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: T) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  formikSetValue?: (field: string, value?: T | null, shouldValidate?: boolean | undefined) => void;
}

export interface IOptions<T> {
  primaryKey?: keyof T;
  options?: T[];
}
