const generateMultipleFilterParams = (...params: (string | null | undefined)[]): string => {
  const filteredParams = params.filter(
    (param) => param !== null && param !== undefined && param !== '',
  );
  return filteredParams.join('&');
};

export default generateMultipleFilterParams;
