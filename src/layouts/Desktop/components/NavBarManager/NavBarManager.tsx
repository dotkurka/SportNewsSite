import { useState } from 'react';
import { Link, useNavigate, useParams, useMatch, useLocation } from 'react-router-dom';

import { Button, Modal } from 'components';
import { ButtonVariant } from 'components/Button/enums';
import { ModalVariant } from 'components/Modal/enums';
import { changePassword, newArticle, personal } from 'constants/routesPath';
import NavBarManagerButton from 'layouts/Desktop/components/NavBarManager/NavBarManagerButton';

import type { INavBarManager } from 'layouts/Desktop/components/NavBarManager/types';

import './NavBarManager.scss';

const NavBarManager = ({ data, submitArticleRef }: INavBarManager) => {
  const [showModal, setShowModal] = useState(false);
  const { category } = useParams();
  const { pathname } = useLocation();
  const matchPath = useMatch(`${category}/${newArticle}`);
  const navigate = useNavigate();

  const newArticleNavigate = () => {
    navigate(`${category}/${newArticle}`);
  };

  const handleSubmitArticle = () => {
    submitArticleRef.current?.click();
  };

  const handleDiscardChange = () => {
    navigate(-1);
    setShowModal(false);
  };

  const myProfile = pathname === personal || pathname === changePassword ? 'My Profile' : category;
  const checkingLocation = pathname.split('/')[1] || 'Home';
  const title = myProfile || checkingLocation;

  return (
    <div className='navbar-manager'>
      <div className='navbar-manager-head'>
        <Modal
          variant={ModalVariant.Exit}
          onClick={handleDiscardChange}
          show={showModal}
          handleShow={setShowModal}
        />
        <div className='navbar-manager-head-category'>
          <span>{title}</span>
        </div>
        {checkingLocation === 'Home' ? (
          <Button
            onClick={handleSubmitArticle}
            form='newarticle'
            variant={ButtonVariant.Contained}
            type='submit'
          >
            Save
          </Button>
        ) : (
          <NavBarManagerButton
            cancelOnClick={() => setShowModal(true)}
            saveOnClick={handleSubmitArticle}
            newArtcleOnClick={newArticleNavigate}
            disabled={!category}
            matchPath={matchPath}
          />
        )}
      </div>
      <div className='navbar-manager-menu'>
        {data?.map((item) => {
          const checkPath = item.path.replace('/', '') === category || item.path === pathname;
          const slected = checkPath ? 'selected' : '';
          return (
            <Link key={item.id} to={item.path} className={`navbar-manager-menu-item ${slected}`}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarManager;
