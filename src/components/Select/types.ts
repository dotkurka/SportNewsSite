export interface ISelect {
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  touched?: boolean;
  errors?: string;
  options: string[];
  className?: string;
  defaultValue?: string;
  variant?: SelectVariant;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: string) => void;
  formikSetValue?: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
}

export enum SelectVariant {
  Outline = 'outline',
  Text = 'text',
}
