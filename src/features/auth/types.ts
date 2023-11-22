export interface IForm {
  className?: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  articles?: [];
  surveys?: [];
  teamHub?: [];
}

export interface IUserResponse {
  user: IUser;
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
