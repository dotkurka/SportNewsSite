import { useEffect, useRef, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { ReactComponent as ImageIcon } from 'assets/images/image-upload-icon.svg';
import { Button } from 'components';

import type { IImageUpload } from 'components/ImageUpload/types';

import './ImageUpload.scss';

const ImageUpload = ({ onChange, onDrop, href, isLoading, className = '' }: IImageUpload) => {
  const [drag, setDrag] = useState(false);
  const [imageHref, setImageHref] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    const file = (event.target.files as FileList)[0];

    if (onChange) onChange(file);
  };

  if (isLoading) {
    return (
      <div className='image'>
        <div className='image-upload'>
          <TailSpin width='65' color='#D72130' />
        </div>
      </div>
    );
  }
  return (
    <div className={`image ${className}`}>
      {imageHref ? (
        <>
          <Button className='image-uploaded-btn' onClick={() => setImageHref(null)}>
            Remove
          </Button>
          <img alt='' className='image-uploaded-img' src={imageHref} />
        </>
      ) : (
        <div
          onDragStart={dragStartHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragStartHandler}
          onDrop={dropHandler}
          className={`image-upload ${drag ? 'drop-shadow' : ''}`}
        >
          <button className='image-upload-btn' onClick={() => inputRef.current?.click()}>
            <ImageIcon className='image-upload-icon' />
          </button>
          <input ref={inputRef} type='file' onChange={inputChangeHandler} hidden />
          <p className='image-upload-text'>
            <span>Add picture</span> or drop right here
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
