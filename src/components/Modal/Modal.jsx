import { createPortal } from 'react-dom';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, children }) => {
  return createPortal(
    <Backdrop>
      <CloseButton onClick={onClick} />
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
