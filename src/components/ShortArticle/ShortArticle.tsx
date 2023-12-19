import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDeleteArticleMutation } from 'api/articlesApi';
import { ReactComponent as ArrowIcon } from 'assets/images/sub-article-arrow.svg';
import { DropdownButton, Modal } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { truncateText } from 'utils';

import type { IShortArticle } from 'components/ShortArticle/types';
import type { IRequestError } from 'features/auth/types';

import './ShortArticle.scss';

const ShortArticle = ({ data, user, className = '' }: IShortArticle) => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const shortContent = truncateText(data.content, 178);
  const navigate = useNavigate();

  const [removeArticle, { isError, error: articleError }] = useDeleteArticleMutation();

  useEffect(() => {
    if (isError) {
      const error = (articleError as IRequestError).data?.message;
      setErrorMessage(error);
      setShowModal(true);
    }
  }, [isError]);

  const deleteArticle = () => {
    removeArticle(data.id);
    setShowModal(false);
  };

  const editArticle = () => {
    navigate(`${data.path}/edit`);
    setShowModal(false);
  };

  const dropOption = [
    {
      value: 'Edit',
      onClick: () => editArticle(),
    },
    {
      value: 'Delete',
      onClick: () => setShowModal(true),
    },
  ];

  const modalVariant = errorMessage ? ModalVariant.Custom : ModalVariant.Delete;
  const managerMod = true;
  const chekingUserEdit = user?.id === data.user.id;
  const showDropDown = chekingUserEdit || managerMod;

  return (
    <div className={`short-article ${className}`}>
      <Modal
        customText={{ title: 'ERROR', message: errorMessage }}
        show={showModal}
        onClick={deleteArticle}
        handleShow={setShowModal}
        variant={modalVariant}
      />
      {showDropDown && <DropdownButton className='short-article-select' options={dropOption} />}
      <Link to={data.path} className='short-article-contain'>
        <div className='short-article-img'>
          <img src={data.img} alt={data.alt} />
        </div>
        <div className='short-article-text'>
          <h3>{data.title}</h3>
          <p>{shortContent}</p>
          <span>
            {data.conference} / {data.team}
          </span>
        </div>
        <ArrowIcon className='short-article-arrow' />
      </Link>
    </div>
  );
};

export default ShortArticle;
