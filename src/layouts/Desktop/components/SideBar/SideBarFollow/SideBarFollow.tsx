import { ReactComponent as FacebookIcon } from 'assets/images/facebook-follow-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/google-follow-icon.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter-follow-icon.svg';
import { ReactComponent as YoutubeIcon } from 'assets/images/youtube-follow-icon.svg';

import './SideBarFollow.scss';

const SideBarFollow = () => {
  return (
    <div className='sidebar-follow'>
      Follow
      <div className='sidebar-follow-icon'>
        <div className='sidebar-follow-icon-contain'>
          <FacebookIcon className='sidebar-follow-icon-item' />
          <TwitterIcon className='sidebar-follow-icon-item' />
        </div>
        <div className='sidebar-follow-icon-contain'>
          <GoogleIcon className='sidebar-follow-icon-item' />
          <YoutubeIcon className='sidebar-follow-icon-item' />
        </div>
      </div>
    </div>
  );
};

export default SideBarFollow;
