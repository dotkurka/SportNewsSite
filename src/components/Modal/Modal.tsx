import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as DumpIcon } from 'assets/images/dump-icon.svg';
import { ReactComponent as QuestionIcon } from 'assets/images/question-icon.svg';
import { Button } from 'components';
import { ButtonVariant } from 'components/Button/enums';
import { ModalVariant } from 'components/Modal/enums';
import useClickOutside from 'hooks/useClickOutside';
import { lockScrollbar, unlockScrollbar } from 'utils/lockScrollbar';

import type { ModalFillingType, IModal } from 'components/Modal/types';

import './Modal.scss';

const defaultModalFiling: ModalFillingType = {
  delete: {
    title: 'You are about to delete an article',
    message: 'This article will be deleted from Sport News',
    answer: 'Are you sure?',
  },
  exit: {
    title: 'Are you sure you want to exit?',
    message: 'You changes will not be saved',
  },
};

const modalIconVarian = {
  [ModalVariant.Delete]: <DumpIcon />,
  [ModalVariant.Exit]: <QuestionIcon />,
  [ModalVariant.Custom]: null,
};

const Modal = ({
  show,
  onClick,
  cancelHandler,
  customText,
  handleShow,
  buttonConfirmText,
  className = '',
  variant = ModalVariant.Custom,
}: IModal) => {
  const handleHidden = () => {
    handleShow(false);
    unlockScrollbar();
    cancelHandler?.();
  };

  const transitionRef = useRef(null);
  const modalRef = useClickOutside(handleHidden);

  const textConfirmVariant = {
    [ModalVariant.Delete]: 'Delete',
    [ModalVariant.Exit]: 'OK',
    [ModalVariant.Custom]: buttonConfirmText || 'OK',
  };

  const modalVariant = {
    [ModalVariant.Delete]: defaultModalFiling.delete,
    [ModalVariant.Exit]: defaultModalFiling.exit,
    [ModalVariant.Custom]: customText,
  };

  return (
    <CSSTransition
      nodeRef={transitionRef}
      in={show}
      timeout={200}
      classNames='modal-transition'
      unmountOnExit
      onEnter={() => lockScrollbar()}
      onExited={() => unlockScrollbar()}
    >
      <div ref={transitionRef} className='modal'>
        <div ref={modalRef} className={`modal-contain ${className}`}>
          {modalIconVarian[variant] && <div className='modal-icon'>{modalIconVarian[variant]}</div>}
          <div className='modal-text'>
            <h4 className='modal-text-title'>{modalVariant[variant]?.title}</h4>
            <p>{modalVariant[variant]?.message}</p>
            {modalVariant[variant]?.answer && <p>{modalVariant[variant]?.answer}</p>}
          </div>
          <div className='modal-btn'>
            <Button onClick={handleHidden} className='modal-btn-item' variant={ButtonVariant.Text}>
              Cancel
            </Button>
            {onClick && (
              <Button
                onClick={onClick}
                className='modal-btn-item'
                variant={ButtonVariant.Contained}
              >
                {textConfirmVariant[variant]}
              </Button>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
