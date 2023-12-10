import { useState } from 'react';
import { Link, useNavigate, useParams, useMatch } from 'react-router-dom';

import { Button, Modal, Select } from 'components';
import { ButtonVariant } from 'components/Button/types';
import { ModalVariant } from 'components/Modal/types';
import { SelectVariant } from 'components/Select/types';
import { sidebarData } from 'config/SideBarData/SidebarData';
import { newArticle } from 'constants/routesPath';

import './NavBarManager.scss';

interface INavBarManager {
  submitArticleRef: React.RefObject<HTMLButtonElement>;
}

const NavBarManager = ({ submitArticleRef }: INavBarManager) => {
  const [showModal, setShowModal] = useState(false);
  const { category } = useParams();
  const location = useMatch(`${category}/${newArticle}`);
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
        {location ? (
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
        {sidebarData.map((item) => (
          <Link key={item.id} to={item.path} className='navbar-manager-menu-item'>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarManager;
