import { CloseBtn } from './CloseButton.styled';

const CloseButton = ({ onClick }) => {
  return (
    <>
      <CloseBtn type="button" onClick={onClick}>
        X
      </CloseBtn>
    </>
  );
};

export default CloseButton;
