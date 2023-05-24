import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { BackdropBox } from './Backdrop.styled';

const Backdrop = ({ onClose, className, children }) => {
  return (
    <BackdropBox className={className || ''}>
      <CloseButton onClick={onClose} />
      {children}
    </BackdropBox>
  );
};

export default Backdrop;
