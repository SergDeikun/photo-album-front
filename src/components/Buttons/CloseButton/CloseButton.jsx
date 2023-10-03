import { CloseBtn, CloseIcon } from './CloseButton.styled';

const CloseButton = ({ onClose, className }) => {
  return (
    <>
      <CloseBtn type="button" onClick={onClose} className={className || ''}>
        <CloseIcon />
      </CloseBtn>
    </>
  );
};

export default CloseButton;
