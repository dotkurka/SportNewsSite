export interface ISelect {
  options: string[];
  touched?: boolean;
  errors?: string;
  className?: string;
  defaultValue?: string;
  variant?: SelectVariant;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  formikSetValue?: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
}

export enum SelectVariant {
  Outline = 'outline',
  Text = 'text',
  Dots = 'dots',
}
