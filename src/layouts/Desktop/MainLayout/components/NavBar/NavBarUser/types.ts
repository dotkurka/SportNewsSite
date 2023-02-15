export interface IUserData {
  image: string;
  name: string;
  surName: string | null;
  status: string;
  email: string;
}

export interface IBarUser {
  user?: IUserData | undefined;
}
