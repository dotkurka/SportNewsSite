interface ILocal {
  name: string;
  value: string;
}

export const saveInLocal = ({ name, value }: ILocal) => {
  localStorage.setItem(name, value);
};

export const removeInLocal = (name: string) => {
  localStorage.removeItem(name);
};
