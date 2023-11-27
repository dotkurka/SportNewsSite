import { ReactComponent as ArrowCircle } from 'assets/images/arrow-circle-2.svg';
import { Button, ShareButton } from 'components';
import { ButtonVariant } from 'components/Button/types';
import mainArticleVariant from 'components/MainArticle/mainArticleVariant';
import { convertDateISO, removeMarkdown, truncateText } from 'utils';

import type { IMainTitle } from 'components/MainArticle/types';

import './MainArticle.scss';

const MainArticleTitle = ({ sliderData, currentIndex, setCurrentIndex, variant }: IMainTitle) => {
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const index = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const index = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const titleVariant =
    mainArticleVariant[variant] === mainArticleVariant.carousel
      ? sliderData[currentIndex].title
      : `Article by ${sliderData[currentIndex].user.firstName} ${sliderData[currentIndex].user.lastName}`;

  const contentVariant =
    mainArticleVariant[variant] === mainArticleVariant.carousel
      ? truncateText(removeMarkdown(sliderData[currentIndex].content), 120)
      : sliderData[currentIndex].title;

  const datePublished = convertDateISO(sliderData[currentIndex].published);

  return (
    <div className='main-article-title'>
      <div className='main-article-title-text'>
        <span>Published / {datePublished}</span>
        <h3>{titleVariant}</h3>
        <h2>{contentVariant}</h2>
      </div>
      <div className='main-article-title-shadow' />
      {/* TODO add path for the button  */}

      {mainArticleVariant[variant] === mainArticleVariant.share && (
        <ShareButton className='main-article-title-btn' />
      )}

      {mainArticleVariant[variant] === mainArticleVariant.carousel && (
        <>
          <Button variant={ButtonVariant.Contained} className='main-article-title-btn'>
            More
          </Button>
          <div className='main-article-button'>
            <button className='main-article-button-circle left' onClick={goToPrevious}>
              <ArrowCircle />
            </button>
            {sliderData.map((slide, index) => (
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
          <div className='main-article-mobile-btn'>
            <button className='left' onClick={goToPrevious}>
              {}
            </button>
            <button onClick={goToNext}>{}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainArticleTitle;
