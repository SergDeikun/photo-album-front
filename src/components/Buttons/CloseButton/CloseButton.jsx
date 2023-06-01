import { CloseBtn, CloseIcon } from './CloseButton.styled';

const CloseButton = ({ onClick, className }) => {
  return (
    <>
      <CloseBtn type="button" onClick={onClick} className={className || ''}>
        <CloseIcon />
      </CloseBtn>
    </>
  );
};

export default CloseButton;
