import shareIcon from 'assets/images/share-icon.svg';
import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/enums';

import './ShareButton.scss';

interface IShareButton {
  className?: string;
}

const ShareButton = ({ className, ...props }: IShareButton) => {
  return (
    <Button variant={ButtonVariant.Contained} className={`share-button ${className}`}>
      <div {...props} className='share-button-contain'>
        <img src={shareIcon} alt='' />
        Share
      </div>
    </Button>
  );
};

export default ShareButton;
