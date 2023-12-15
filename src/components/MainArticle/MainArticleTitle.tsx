import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowCircle } from 'assets/images/arrow-circle-2.svg';
import { Button, ShareButton } from 'components';
import { ButtonVariant } from 'components/Button/types';
import mainArticleVariant from 'components/MainArticle/mainArticleVariant';
import { convertDateISO, removeMarkdown, truncateText } from 'utils';

import type { IMainTitle } from 'components/MainArticle/types';

import './MainArticle.scss';

const MainArticleTitle = ({ sliderData, currentIndex, controls, variant }: IMainTitle) => {
  const currentArticle = sliderData[currentIndex];
  const datePublished = convertDateISO(currentArticle.published);

  const { goToNext, goToPrevious, goToSlide } = controls;
  const navigate = useNavigate();

  const goToPage = () => {
    const { category, team, path } = currentArticle;
    const articlePath = `/${category}/${team}/${path}`;

    navigate(articlePath);
  };

  const titleVariant =
    mainArticleVariant[variant] === mainArticleVariant.carousel
      ? currentArticle.title
      : `Article by ${currentArticle.user.firstName} ${currentArticle.user.lastName}`;

  const contentVariant =
    mainArticleVariant[variant] === mainArticleVariant.carousel
      ? truncateText(removeMarkdown(currentArticle.content), 120)
      : currentArticle.title;

  return (
    <div className='main-article-title'>
      <div className='main-article-title-text'>
        <span>Published / {datePublished}</span>
        <h3>{titleVariant}</h3>
        <h2>{contentVariant}</h2>
      </div>
      <div className='main-article-title-shadow' />
      {/* TODO add path for the ShareButton */}

      {mainArticleVariant[variant] === mainArticleVariant.share && (
        <ShareButton className='main-article-title-btn' />
      )}

      {mainArticleVariant[variant] === mainArticleVariant.carousel && (
        <>
          <Button
            onClick={goToPage}
            variant={ButtonVariant.Contained}
            className='main-article-title-btn'
          >
            More
          </Button>
          <div className='main-article-button'>
            <button className='main-article-button-circle left' onClick={goToPrevious}>
              <ArrowCircle />
            </button>
            {sliderData.map((_slide, index) => (
              <button
                key={index}
                className={`main-article-button-number ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                0{index + 1}
              </button>
            ))}
            <button className='main-article-button-circle right' onClick={goToNext}>
              <ArrowCircle />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainArticleTitle;
