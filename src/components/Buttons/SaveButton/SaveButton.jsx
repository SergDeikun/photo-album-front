import { SaveBtn } from './SaveButton.styled';

const SaveButton = ({ isVisible, className }) => {
  return (
    <>
      <SaveBtn type="submit" isVisible={isVisible} className={className || ''}>
        Save
      </SaveBtn>
    </>
  );
};

export default SaveButton;
