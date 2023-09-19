import { createPortal } from 'react-dom';
import Backdrop from 'components/Backdrop/Backdrop';

import { ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children, className }) => {
  return createPortal(
    <Backdrop onClose={onClose}>
      <ModalWindow className={className || ''}>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
