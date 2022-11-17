export interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
}

export enum InputVariant {
  Succes = 'succes',
  Error = 'error',
  Default = 'default',
}
