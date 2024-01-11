import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { ModalVariant } from 'components/Modal/enums';

export interface IModal {
  show: boolean;
  handleShow: (value: boolean) => void;
  variant?: ModalVariant;
  customText?: IModalCustomText;
  onClick?: () => void;
  cancelHandler?: () => void;
  buttonConfirmText?: string;
  className?: string;
}

export interface IModalCustomText {
  title: string;
  message: string;
  answer?: string;
}

export type ModalFillingType = Record<string, IModalCustomText>;

export interface IErrorModal {
  errorTitle?: string;
  isError: boolean;
  error?: FetchBaseQueryError | SerializedError;
  cancelHandler?: () => void;
}
