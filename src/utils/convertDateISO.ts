const convertDateISO = (inputDate: string, format?: 'mmm-d' | 'd.m.yyyy') => {
  const date = new Date(inputDate);

  if (format === 'mmm-d') {
    const month = date.toString().substring(4, 7);
    const day = date.getDate();

    return `${month} ${day}`;
  }

  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export default convertDateISO;
