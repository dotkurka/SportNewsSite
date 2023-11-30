/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ICommentRequest } from 'features/newArticle/types';

const Test = () => {
  const handleSubmit = (value: ICommentRequest) => {
    console.log(value);
  };

  const handleSort = (value: string) => {
    console.log(value);
  };
  const selectData = {
    options: ['Most popular', 'New', 'Oldest'],
    defaultValue: 'Most popular',
  };

  return <div />;
};

export default Test;
