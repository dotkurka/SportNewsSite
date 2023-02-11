import { ReactComponent as EmailIcon } from 'assets/images/check-email-icon.svg';

interface IEmail {
  email?: string;
}

const CheckEmail = ({ email }: IEmail) => {
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
    </div>
  );
};

export default CheckEmail;
