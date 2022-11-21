import { Button, Input, Logo, TextLink } from '../../components';
import { ButtonVariant } from '../../components/Button/types';
import { InputVariant } from '../../components/Input/types';
import ShareButton from '../../components/ShareButton/ShareButton';
import { TextLinkVariant } from '../../components/TextLink/types';

import './LogInPage.scss';

const LogInPage = () => {
  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <Button variant={ButtonVariant.Contained} size='large' type='button'>
          Sign up
        </Button>
        <TextLink variant={TextLinkVariant.Body2}>Select your teams</TextLink>
        <div>
          <Input
            type='text'
            label='Email'
            placeholder='jdhfjsdhfjhsd@gmail.com'
            variant={InputVariant.Error}
          />
          <Input
            type='text'
            label='Email'
            placeholder='jdhfjsdhfjhsd@gmail.com'
            variant={InputVariant.Error}
            description={<TextLink variant={TextLinkVariant.Body2}>Forgot password?</TextLink>}
          />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
