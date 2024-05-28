import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

export const generateSlugId = (title: string) => {
  const slugId = `${slugify(title)}-${uuidv4()}`;

  return slugId;
};
