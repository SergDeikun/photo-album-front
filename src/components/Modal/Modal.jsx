import { createPortal } from 'react-dom';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  return createPortal(
    <Backdrop>
      <CloseButton onClick={onClose} />
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
