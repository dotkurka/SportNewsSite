import type { IPasswordUpdate, IUserUpdate } from 'features/user/types';

export interface IPersonalForm {
  handleSubmitForm: (values: IUserUpdate) => void;
  avatarOnChange: (file: File) => void;
  avatar: string;
}

export interface IPasswordForm {
  handleSubmitForm: (values: IPasswordUpdate) => void;
}

export type PersonalDataType = IPasswordUpdate | IUserUpdate;
