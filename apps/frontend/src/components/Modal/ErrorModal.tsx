import { useEffect, useState } from 'react';

import { Modal } from 'components';

import type { IErrorModal, IModalCustomText } from 'components/Modal/types';
import type { IRequestError } from 'features/auth/types';

const ErrorModal = ({ isError, error, cancelHandler, errorTitle = 'ERROR' }: IErrorModal) => {
  const [errorMessage, setErrorMessage] = useState<IModalCustomText>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isError) {
      const errorData = (error as IRequestError).data?.message;
      setErrorMessage({ title: errorTitle, message: errorData });
      setShowModal(true);
    }
  }, [isError]);
  return (
    <Modal
      cancelHandler={cancelHandler}
      customText={errorMessage}
      handleShow={setShowModal}
      show={showModal}
    />
  );
};

export default ErrorModal;
