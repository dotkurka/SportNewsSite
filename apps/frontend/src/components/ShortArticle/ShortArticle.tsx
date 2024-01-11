import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useDeleteArticleMutation } from 'api/articlesApi';
import { ReactComponent as ArrowIcon } from 'assets/images/sub-article-arrow.svg';
import { DropdownButton, ErrorModal, Modal } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { editArticle as editArticlePath } from 'constants/routesPath';
import { managerMode as managerModeState } from 'redux/managerModeSlice';
import { truncateText } from 'utils';

import type { IShortArticle } from 'components/ShortArticle/types';

import './ShortArticle.scss';

const ShortArticle = ({ data, user, className = '' }: IShortArticle) => {
  const [showModal, setShowModal] = useState(false);

  const [removeArticle, { isError, error: articleError }] = useDeleteArticleMutation();

  const shortContent = truncateText(data.content, 178);
  const managerMode = useSelector(managerModeState);
  const navigate = useNavigate();

  const deleteArticle = async () => {
    await removeArticle(data.id);
    setShowModal(false);
  };

  const editArticle = () => {
    navigate(`${data.path}/${editArticlePath}`);
  };

  const dropOption = [
    {
      value: 'Edit',
      onClick: editArticle,
    },
    {
      value: 'Delete',
      onClick: () => setShowModal(true),
    },
  ];

  const chekingUserEdit = user?.id === data.user.id;
  const showDropDown = chekingUserEdit || managerMode;

  return (
    <div className={`short-article ${className}`}>
      <Modal
        handleShow={setShowModal}
        onClick={deleteArticle}
        show={showModal}
        variant={ModalVariant.Delete}
      />
      <ErrorModal error={articleError} isError={isError} />
      {showDropDown && <DropdownButton className='short-article-select' options={dropOption} />}
      <Link className='short-article-contain' to={data.path}>
        <div className='short-article-img'>
          <img alt={data.alt} src={data.img} />
        </div>
        <div className='short-article-text'>
          <h3>{data.title}</h3>
          <p>{shortContent}</p>
          <span>
            {data.conference.title} / {data.team.title}
          </span>
        </div>
        <ArrowIcon className='short-article-arrow' />
      </Link>
    </div>
  );
};

export default ShortArticle;
