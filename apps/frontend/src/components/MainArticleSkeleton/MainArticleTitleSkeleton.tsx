import Skeleton from 'react-loading-skeleton';

import { Button } from 'components';
import { ButtonVariant } from 'components/Button/enums';

import 'components/MainArticle/MainArticle.scss';

const MainArticleTitleSkeleton = () => {
  return (
    <div className='main-article-title'>
      <div className='main-article-title-text'>
        <span>
          <Skeleton />
        </span>
        <h3>
          <Skeleton count={2} />
        </h3>
        <h2>
          <Skeleton />
        </h2>
      </div>
      <div className='main-article-title-shadow' />
      <Button className='main-article-title-btn' variant={ButtonVariant.Contained}>
        <Skeleton baseColor='#e1464e' width={100} />
      </Button>
      <div className='main-article-button' />
    </div>
  );
};

export default MainArticleTitleSkeleton;
