import { CloseBtn, CloseIcon } from './CloseButton.styled';

const CloseButton = ({ onClick }) => {
  return (
    <>
      <CloseBtn type="button" onClick={onClick}>
        <CloseIcon />
      </CloseBtn>
    </>
  );
};

export default CloseButton;
