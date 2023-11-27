import { useState } from 'react';

import { ArticleComments, SwitchButton } from 'components';
import { articleData } from 'config/ArticleData/articleData';

import type { ICommentRequest } from 'features/newArticle/types';

const Test = () => {
  const [select, setSelect] = useState(false);

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

  return (
    <div>
      <SwitchButton checked={select} id='radio' onChange={(e) => setSelect(e)} />
      <ArticleComments
        comments={articleData.comments}
        user={articleData.user}
        handleSubmit={handleSubmit}
        handleChangeSort={handleSort}
        selectData={selectData}
      />
    </div>
  );
};

export default Test;
