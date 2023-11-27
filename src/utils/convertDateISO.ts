const convertDateISO = (inputDate: string, format?: 'mmm-d' | 'd.m.yyyy') => {
  const date = new Date(inputDate);

  if (format === 'mmm-d') {
    const month = date.toString().substring(4, 7);
    const day = date.getDate();

    return `${month} ${day}`;
  }

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
};

export default convertDateISO;
