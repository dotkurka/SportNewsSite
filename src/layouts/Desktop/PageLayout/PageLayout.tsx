import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as FbIcon } from 'assets/images/facebook-circle-icon.svg';
import { ReactComponent as GmailIcon } from 'assets/images/gmail-circle-icon.svg';
import { SidebarData } from 'config/SideBarData/SidebarData';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobilePageLayout } from 'layouts';
import { NavBar, SideBar } from 'layouts/Desktop/components';

import './PageLayout.scss';

const PageLayout = () => {
  const isMobile = useMobileWidth(1024);

  if (isMobile) {
    return <MobilePageLayout />;
  }

  return (
    <div className='page-layout'>
      <div className='page-layout-bg'>
        <span className='page-layout-bg-first'>All</span>
        <span className='page-layout-bg-last'>News</span>
      </div>
      <NavBar />
      <div className='page-layout-contain'>
        <SideBar data={SidebarData} />
        <div className='page-layout-contain-children'>
          <Outlet />
        </div>
      </div>

      <div className='footer'>
        <div className='footer-nav'>
          <div className='footer-nav-list'>
            <h4>COMPANY INFO</h4>
            <Link to='/'>About Sport News</Link>
            <Link to='/'>News / In the Press</Link>
            <Link to='/'>Advertising / Sports Blogger Ad Network</Link>
            <Link to='/'> Events</Link>
            <Link to='/'>Contact Us</Link>
          </div>
          <div className='footer-nav-list'>
            <h4>CONTRIBUTORS</h4>
            <Link to='/'>Featured Writers Program</Link>
            <Link to='/'>Featured Team Writers Program</Link>
            <Link to='/'>Internship Program</Link>
          </div>
          <div className='footer-nav-form'>
            <h4>NEWSLETTER</h4>
            <p>Sing up to recive the latest in sport news </p>
            <form>
              <input placeholder='Your email address' type='text' />
              <button type='submit'>Subscribe</button>
            </form>
            <div className='footer-nav-form-sign'>
              <span>Sing up by</span>
              <div className='footer-nav-form-sign-icon'>
                <FbIcon />
                <GmailIcon />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-sub'>
          <span className='footer-sub-logo'>Sport News</span>
          <div className='footer-sub-text'>
            <span>Copyrighth ©2019 Sport News</span>
            <div>
              <Link to='/'>Privacy</Link> / <Link to='/'>Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
