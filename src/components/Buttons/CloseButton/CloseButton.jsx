import { CloseBatton } from './CloseButton.styled';

const CloseButton = ({ onClick }) => {
  return (
    <>
      <CloseBatton type="button" onClick={onClick}>
        X
      </CloseBatton>
    </>
  );
};

export default CloseButton;
