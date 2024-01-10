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
        variant={ButtonVariant.Contained}
        type='button'
      >
        + New Article
      </Button>
    );
  }

  return (
    <div className='navbar-manager-head-btn'>
      <Button onClick={cancelOnClick} variant={ButtonVariant.Text} type='button'>
        Cancle
      </Button>
      <Button
        onClick={saveOnClick}
        form='newarticle'
        variant={ButtonVariant.Contained}
        type='submit'
      >
        Save
      </Button>
    </div>
  );
};

export default NavBarManagerButton;
