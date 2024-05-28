import { useEffect, useRef, useState } from 'react';

import { ReactComponent as ImageUploadIcon } from 'assets/images/image-upload-icon.svg';
import userAvatar from 'assets/images/profile-avatar-grey.svg';

import type { IAvatarUpload } from 'components/AvatarUpload/types';

import './AvatarUpload.scss';

const AvatarUpload = ({ onChange, href, className = '' }: IAvatarUpload) => {
  const [imageHref, setImageHref] = useState(href);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (href) {
      setImageHref(href);
    }
  }, [href]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    onChange?.(file);
  };

  return (
    <>
      <button
        className={`avatar-upload ${className}`}
        onClick={() => inputRef.current?.click()}
        type='button'
      >
        <div className='avatar-upload-image'>
          <img alt='avatar' src={imageHref || userAvatar} />
        </div>
        <ImageUploadIcon className='avatar-upload-icon' />
      </button>
      <input
        accept='image/png, image/jpeg, image/jpg'
        hidden
        onChange={handleChange}
        ref={inputRef}
        type='file'
      />
    </>
  );
};

export default AvatarUpload;
