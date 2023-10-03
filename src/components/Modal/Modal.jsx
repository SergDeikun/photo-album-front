import { createPortal } from 'react-dom';

import Backdrop from 'components/Backdrop/Backdrop';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children, className }) => {
  return createPortal(
    <Backdrop>
      <CloseButton onClose={onClose} />
      <ModalWindow className={className || ''}>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
