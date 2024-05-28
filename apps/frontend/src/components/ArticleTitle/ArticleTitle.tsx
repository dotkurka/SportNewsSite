import { ArticleTitleVariant } from 'components/ArticleTitle/types';

import type { IArticleTitle } from 'components/ArticleTitle/types';

import './ArticleTitle.scss';

const articleVariant = {
  [ArticleTitleVariant.small]: 'small',
  [ArticleTitleVariant.large]: 'large',
};

const ArticleTitle = ({
  children,
  className,
  variant = ArticleTitleVariant.large,
}: IArticleTitle) => {
  return (
    <div className={`article-title ${articleVariant[variant]} ${className}`}>
      <div>
        <span className='text'>{children}</span>
      </div>
    </div>
  );
};

export default ArticleTitle;
