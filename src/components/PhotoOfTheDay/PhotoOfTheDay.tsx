import { ReactComponent as PhotoDayMark } from 'assets/images/triangle-photo-of-the-day.svg';

import type { IPhotoDay } from 'components/PhotoOfTheDay/types';

import './PhotoOfTheDay.scss';

const PhotoOfTheDay = ({ photoDayData, className }: IPhotoDay) => {
  return (
    <div className={`photo-of-the-day ${className}`}>
      <div className='photo-of-the-day-mark'>
        <div className='photo-of-the-day-mark-text'>
          <span className='bold'>Photo</span>
          <span>Of the</span>
          <span className='bold'>Day</span>
        </div>
        <PhotoDayMark className='photo-of-the-day-mark-triangle' />
      </div>
      <img src={photoDayData.img} alt={photoDayData.alt} />
      <div className='photo-of-the-day-text'>
        <h2>{photoDayData.title} </h2>
        <p className='photo-of-the-day-text-description'>{photoDayData.description}</p>
        <p className='photo-of-the-day-text-author'>{photoDayData.author}</p>
      </div>
    </div>
  );
};

export default PhotoOfTheDay;
