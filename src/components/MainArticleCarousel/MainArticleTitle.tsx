import { ReactComponent as ArrowCircle } from 'assets/images/arrow-circle-2.svg';
import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/types';

import type { IMainTitle } from 'components/MainArticleCarousel/types';

import './MainArticleCarousel.scss';

const MainArticleTitle = ({ sliderData, currentIndex, setCurrentIndex }: IMainTitle) => {
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

  return (
    <div className='main-article-title'>
      <div className='main-article-title-text'>
        <span>{sliderData[currentIndex].title.published}</span>
        <h3>{sliderData[currentIndex].title.head}</h3>
        <h2>{sliderData[currentIndex].title.description}</h2>
      </div>
      {/* TODO add path for the button  */}
      <Button variant={ButtonVariant.Contained} className='main-article-title-btn'>
        More
      </Button>
      <div className='main-article-title-shadow' />
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
    </div>
  );
};

export default MainArticleTitle;
