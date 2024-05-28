import type { IUser } from 'features/user/types';

export interface IForm {
  className?: string;
}

export interface IAuthResponse {
  token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface IRequestError {
  data: {
    message: string;
  };
}

export interface IAuthSliceInitialValue {
  user: IUser;
  token: string;
}
