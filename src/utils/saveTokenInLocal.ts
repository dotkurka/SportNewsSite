interface ILocal {
  name: string;
  value: string;
}

export const saveInLocal = ({ name, value }: ILocal) => {
  localStorage.setItem(name, JSON.stringify(value));
};
