import { createPortal } from 'react-dom';
// import Backdrop from 'components/Backdrop/Backdrop';

import { ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ isOpen, children, className }) => {
  // console.log(isOpen);

  return createPortal(
    // <Backdrop onClose={onClose}>
    <ModalWindow isOpen={isOpen} className={className || ''}>
      {children}
    </ModalWindow>,
    // </Backdrop>,
    modalRoot
  );
};

export default Modal;
