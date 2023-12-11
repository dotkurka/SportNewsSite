import { useState } from 'react';
import { Link, useNavigate, useParams, useMatch, useLocation } from 'react-router-dom';

import { Button, Modal, Select } from 'components';
import { ButtonVariant } from 'components/Button/types';
import { ModalVariant } from 'components/Modal/types';
import { SelectVariant } from 'components/Select/types';
import { newArticle } from 'constants/routesPath';

import './NavBarManager.scss';
import type { ICaregoryData } from 'features/category/types';

interface INavBarManager {
  submitArticleRef: React.RefObject<HTMLButtonElement>;
  data?: ICaregoryData[];
}

const NavBarManager = ({ data, submitArticleRef }: INavBarManager) => {
  const [showModal, setShowModal] = useState(false);
  const { category } = useParams();
  const matchPath = useMatch(`${category}/${newArticle}`);
  const location = useLocation();
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

  return (
    <div>
      <div className='navbar-manager-head'>
        <Modal
          variant={ModalVariant.Exit}
          onClick={handleDiscardChange}
          show={showModal}
          handleShow={setShowModal}
        />
        <div className='navbar-manager-head-category'>
          <span>NBA</span>
          <Select
            className='navbar-manager-head-category-select'
            variant={SelectVariant.Dots}
            options={['Edit', 'Delete']}
          />
        </div>
        {matchPath ? (
          <div className='navbar-manager-head-btn'>
            <Button onClick={() => setShowModal(true)} variant={ButtonVariant.Text} type='button'>
              Cancle
            </Button>
            <Button
              onClick={handleSubmitArticle}
              form='newarticle'
              variant={ButtonVariant.Contained}
              type='submit'
            >
              Save
            </Button>
          </div>
        ) : (
          <Button
            disabled={!category}
            onClick={newArticleNavigate}
            variant={ButtonVariant.Contained}
            type='button'
          >
            + New Article
          </Button>
        )}
      </div>
      <div className='navbar-manager-menu'>
        {data?.map((item) => {
          const checkPath =
            item.path.replace('/', '') === category || item.path === location.pathname;
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
