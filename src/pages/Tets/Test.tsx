/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';

import { ShortArticle } from 'components';
import { articleData } from 'config/ArticleData/articleData';

const fillMidal = {
  title: 'EEROROOFJF',
  message:
    'sajkhd asdh shajkfh asf aksfhasfh kasjhfjk askjfhkasjh fk sakfh akshfkjhaskjhfgjk asfa sfkjhasfkj asjkhf kjash fhafsk j',
};

const handleSubmit = () => {
  console.log('okey');
};

const Test = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ShortArticle data={articleData} />
    </div>
  );
};

export default Test;
