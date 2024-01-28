import Skeleton from 'react-loading-skeleton';

import MainArticleTitleSkeleton from './MainArticleTitleSkeleton';

import type { IMainArticleSkeleton } from 'components/MainArticleSkeleton/types';

import 'react-loading-skeleton/dist/skeleton.css';
import 'components/MainArticle/MainArticle.scss';

const MainArticleSkeleton = ({ text, className = '' }: IMainArticleSkeleton) => {
  return (
    <div className={`main-article ${className}`}>
      <div className='main-article-contain'>
        <div className='main-article-img-area'>
          <Skeleton style={{ zIndex: 0, height: '460px', borderRadius: 'unset' }} />
        </div>
        <MainArticleTitleSkeleton />
      </div>

      {text && (
        <div className='main-article-text'>
          <p>
            <Skeleton count={12} />
          </p>
        </div>
      )}
    </div>
  );
};

export default MainArticleSkeleton;
