import { ReactComponent as PreviewIcon } from 'assets/images/preview-icon.svg';

import type { IPreviewButton } from 'components/PreviewButton/types';

import './PreviewButton.scss';

const PreviewButton = ({
  onClick,
  disabled,
  children = 'Present',
  className = '',
  ...props
}: IPreviewButton) => {
  return (
    <div className={`preview-button ${className}`}>
      <button disabled={disabled} onClick={onClick} {...props}>
        <PreviewIcon className='preview-button-icon' />
        {children}
      </button>
    </div>
  );
};

export default PreviewButton;
