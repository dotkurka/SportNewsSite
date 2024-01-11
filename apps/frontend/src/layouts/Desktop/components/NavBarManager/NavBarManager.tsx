import { useState } from 'react';
import { Link, useNavigate, useParams, useLocation, matchRoutes } from 'react-router-dom';

import { Button, Modal } from 'components';
import { ButtonVariant } from 'components/Button/enums';
import { ModalVariant } from 'components/Modal/enums';
import { changePassword, editArticle, newArticle, personal } from 'constants/routesPath';
import NavBarManagerButton from 'layouts/Desktop/components/NavBarManager/NavBarManagerButton';

import type { INavBarManager } from 'layouts/Desktop/components/NavBarManager/types';

import './NavBarManager.scss';

const NavBarManager = ({ data, submitArticleRef }: INavBarManager) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { category, team, article } = useParams();
  const { pathname } = useLocation();

  const newArticlePath = `${category}/${newArticle}`;
  const updateArticlePath = `${category}/${team}/${article}/${editArticle}`;

  const matchPath = matchRoutes([{ path: newArticlePath }, { path: updateArticlePath }], pathname);

  const newArticleNavigate = () => {
    navigate(newArticlePath);
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
          handleShow={setShowModal}
          onClick={handleDiscardChange}
          show={showModal}
          variant={ModalVariant.Exit}
        />
        <div className='navbar-manager-head-category'>
          <span>{title}</span>
        </div>
        {checkingLocation === 'Home' ? (
          <Button
            form='newarticle'
            onClick={handleSubmitArticle}
            type='submit'
            variant={ButtonVariant.Contained}
          >
            Save
          </Button>
        ) : (
          <NavBarManagerButton
            cancelOnClick={() => setShowModal(true)}
            disabled={!category}
            matchPath={Boolean(matchPath)}
            newArtcleOnClick={newArticleNavigate}
            saveOnClick={handleSubmitArticle}
          />
        )}
      </div>
      <div className='navbar-manager-menu'>
        {data?.map((item) => {
          const checkPath = item.path.replace('/', '') === category || item.path === pathname;
          const slected = checkPath ? 'selected' : '';
          return (
            <Link className={`navbar-manager-menu-item ${slected}`} key={item.id} to={item.path}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarManager;
