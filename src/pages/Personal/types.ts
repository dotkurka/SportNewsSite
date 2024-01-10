import type { IPasswordUpdate, IUser, IUserUpdate } from 'features/user/types';

export interface IPasswordForm<T> {
  handleSubmitForm: (values: T) => void;
}

export interface IPersonalForm extends IPasswordForm<IUserUpdate> {
  avatarOnChange: (file: File) => void;
  user: IUser;
  avatar: string;
}

export type PersonalDataType = IPasswordUpdate | IUserUpdate;
