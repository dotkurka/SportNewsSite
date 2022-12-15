import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-follow-icon.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/google-follow-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter-follow-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/images/youtube-follow-icon.svg';

import './SideBar.scss';
import { SidebarData } from './SidebarData';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-list'>
        <a href='dff' className='sidebar-item home'>
          Home
        </a>

        {SidebarData.map(({ title, link }) => (
          <a href={link} key={link} className='sidebar-item home'>
            {title}
          </a>
        ))}

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
      </div>
    </div>
  );
};

export default SideBar;
