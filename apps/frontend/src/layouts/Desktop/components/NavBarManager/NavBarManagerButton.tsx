import { Button } from 'components';
import { ButtonVariant } from 'components/Button/enums';

import type { INavBarManagerButton } from 'layouts/Desktop/components/NavBarManager/types';

const NavBarManagerButton = ({
  matchPath,
  disabled,
  newArtcleOnClick,
  cancelOnClick,
  saveOnClick,
}: INavBarManagerButton) => {
  if (!matchPath) {
    return (
      <Button
        disabled={disabled}
        onClick={newArtcleOnClick}
        type='button'
        variant={ButtonVariant.Contained}
      >
        + New Article
      </Button>
    );
  }

  return (
    <div className='navbar-manager-head-btn'>
      <Button onClick={cancelOnClick} type='button' variant={ButtonVariant.Text}>
        Cancle
      </Button>
      <Button
        form='newarticle'
        onClick={saveOnClick}
        type='submit'
        variant={ButtonVariant.Contained}
      >
        Save
      </Button>
    </div>
  );
};

export default NavBarManagerButton;
