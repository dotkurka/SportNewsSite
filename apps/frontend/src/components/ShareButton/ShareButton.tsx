import shareIcon from 'assets/images/share-icon.svg';
import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/enums';

import './ShareButton.scss';

interface IShareButton {
  className?: string;
}

const ShareButton = ({ className, ...props }: IShareButton) => {
  return (
    <Button className={`share-button ${className}`} variant={ButtonVariant.Contained}>
      <div {...props} className='share-button-contain'>
        <img alt='' src={shareIcon} />
        Share
      </div>
    </Button>
  );
};

export default ShareButton;
