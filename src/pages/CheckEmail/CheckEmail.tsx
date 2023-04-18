import { ReactComponent as EmailIcon } from 'assets/images/check-email-icon.svg';
import { TextLink } from 'components';
import useMobileWidth from 'hooks/useWindowsWidth';
import { signIn } from 'utils/routesPath';

interface IEmail {
  email?: string;
}

const CheckEmail = ({ email }: IEmail) => {
  const isMobile = useMobileWidth(1024);

  return (
    <div className='check-email'>
      <EmailIcon className='check-email-icon' />
      <div>
        <h1>Check your email {email} </h1>
        <div className='check-email-description'>
          If there&apos;s Sport News account linked to this email address, we&apos;ll send over
          instructions to reset your password.
        </div>
      </div>

      {isMobile && (
        <div className='form-mobile'>
          <TextLink className='form-mobile-link' to={signIn}>
            Don&#39;t have an account?
          </TextLink>
        </div>
      )}
    </div>
  );
};

export default CheckEmail;
