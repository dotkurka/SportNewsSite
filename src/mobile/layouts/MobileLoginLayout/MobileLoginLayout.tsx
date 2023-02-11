import { Logo, TextLink } from 'components';
import { NewPassword } from 'pages';
import './MobileLoginLayout.scss';

const MobileLoginLayout = () => {
  return (
    <div className='login-layout'>
      <Logo className='login-layout-logo' />

      <div className='login-layout-contain'>
        <div className='login-layout-form'>
          <NewPassword />

          <div className='login-layout-btn'>
            <TextLink className='login-layout-link' to='singin'>
              Don&#39;t have an account?
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLoginLayout;
