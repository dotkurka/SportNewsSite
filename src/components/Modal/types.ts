export interface IModal {
  show: boolean;
  handleShow: (value: boolean) => void;
  variant?: ModalVariant;
  customText?: IFilling;
  onClick?: () => void;
  buttonConfirmText?: string;
  className?: string;
}

export enum ModalVariant {
  Delete = 'delete',
  Exit = 'exit',
  Custom = 'custom',
}

interface IFilling {
  title: string;
  message: string;
  answer?: string;
}

export type ModalFillingType = { [key: string]: IFilling };
