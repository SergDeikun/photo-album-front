import { createPortal } from 'react-dom';

import { BackdropBox } from './Backdrop.styled';

const backdropRoot = document.querySelector('#backdrop-root');

const Backdrop = ({ children }) => {
  return createPortal(<BackdropBox>{children}</BackdropBox>, backdropRoot);
};

export default Backdrop;
