import { useEffect, useRef, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { ReactComponent as RemoveIcon } from 'assets/images/dump-icon.svg';
import { ReactComponent as ImageIcon } from 'assets/images/image-upload-icon.svg';

import type { IImageUpload } from 'components/ImageUpload/types';

import './ImageUpload.scss';

const ImageUpload = ({
  onChange,
  onDrop,
  href,
  isLoading,
  touched,
  errors,
  className = '',
}: IImageUpload) => {
  const [drag, setDrag] = useState(false);
  const [imageHref, setImageHref] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const errorValid = errors ? 'error-img' : '';
  const isValid = touched ? errorValid : '';

  useEffect(() => {
    if (href) {
      setImageHref(href);
    }
  }, [href]);

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (onDrop) onDrop(file);
    setDrag(false);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (onChange) onChange(file);
  };

  if (isLoading) {
    return (
      <div className={`image ${className}`}>
        <div className={`image-upload ${isValid}`}>
          <TailSpin color='#D72130' width='65' />
        </div>
      </div>
    );
  }
  return (
    <div className={`image ${className}`}>
      {imageHref ? (
        <>
          <div className='image-uploaded'>
            <button className='image-uploaded-btn' onClick={() => setImageHref(null)}>
              <RemoveIcon className='image-uploaded-btn-icon' />
            </button>
          </div>
          <img alt='' className='image-uploaded-img' src={imageHref} />
        </>
      ) : (
        <div
          className={`image-upload ${isValid} ${drag ? 'drop-shadow' : ''}`}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragStartHandler}
          onDragStart={dragStartHandler}
          onDrop={dropHandler}
        >
          <button
            className='image-upload-btn'
            onClick={() => inputRef.current?.click()}
            type='button'
          >
            <ImageIcon className='image-upload-btn-icon' />
          </button>
          <input
            accept='image/png, image/jpeg'
            hidden
            onChange={inputChangeHandler}
            ref={inputRef}
            type='file'
          />
          <p className='image-upload-text'>
            <span>Add picture</span> or drop right here
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
