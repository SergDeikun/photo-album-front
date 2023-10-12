import { SaveBtn } from './SaveButton.styled';

const SaveButton = ({ isVisible }) => {
  return (
    <>
      <SaveBtn isVisible={isVisible} type="submit">
        Save
      </SaveBtn>
    </>
  );
};

export default SaveButton;
