import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useFileUploadMutation } from 'api/fileUploadApi';
import { useUpdateUserMutation } from 'api/usersApi';
import { ErrorModal, Modal } from 'components';
import { ModalVariant } from 'components/Modal/enums';
import { changePassword, personal } from 'constants/routesPath';
import PasswordForm from 'pages/Personal/PasswordForm';
import PersonalForm from 'pages/Personal/PersonalForm';
import { selectCurrentUser } from 'redux/authSlice';

import type { PersonalDataType } from 'pages/Personal/types';

import './Personal.scss';

const Personal = () => {
  const [avatar, setAvatar] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<{ title: string; message: string }>();
  const [formVariant, setFormVariant] = useState<'personal' | 'password'>('personal');
  const [updateUser, { isError: isUserError, error: userError }] = useUpdateUserMutation();
  const [uploadFile, { isError: isImageError, error: imageError }] = useFileUploadMutation();
  const user = useSelector(selectCurrentUser);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === personal) setFormVariant('personal');
    if (pathname === changePassword) setFormVariant('password');
  }, [pathname]);

  const getAvatarImage = async (file?: File) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const imageHref = await uploadFile(formData).unwrap();

      if (imageHref) {
        await updateUser({ avatar: imageHref.serverPath });
        setAvatar(imageHref.serverPath);
      }
    }
  };

  const handleSubmitForm = async (values: PersonalDataType) => {
    const nonEmptyValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => value !== ''),
    );

    if (Object.keys(nonEmptyValues).length) {
      const updatedUser = await updateUser(nonEmptyValues).unwrap();

      if (updatedUser) {
        setShowModal(true);
        setModalMessage({ title: 'Success', message: 'The user was updated successfully' });
      }
    }
  };

  const passwordVariant = formVariant === 'password';
  const personalVariant = formVariant === 'personal';

  return (
    <div className='personal'>
      <ErrorModal error={userError || imageError} isError={isUserError || isImageError} />
      <Modal
        customText={modalMessage}
        handleShow={setShowModal}
        show={showModal}
        variant={ModalVariant.Custom}
      />
      <div className='personal-contain'>
        <div className='personal-btn'>
          <button
            className={`personal-btn-item ${personalVariant ? 'active' : ''}`}
            onClick={() => setFormVariant('personal')}
          >
            Personal
          </button>
          <button
            className={`personal-btn-item ${passwordVariant ? 'active' : ''}`}
            onClick={() => setFormVariant('password')}
          >
            Change password
          </button>
        </div>
        {personalVariant && (
          <PersonalForm
            avatar={avatar}
            avatarOnChange={getAvatarImage}
            handleSubmitForm={handleSubmitForm}
            user={user}
          />
        )}
        {passwordVariant && <PasswordForm handleSubmitForm={handleSubmitForm} />}
      </div>
    </div>
  );
};

export default Personal;
