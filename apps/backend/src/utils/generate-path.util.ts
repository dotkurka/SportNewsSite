import slugify from 'slugify';

export const generatePath = (...path: string[]): string => {
  const slugPath = path.map((item) => slugify(item));
  return slugPath.reduce((acc, current) => `${acc}/${current}`, '');
};
