import { SaveBtn } from './SaveButton.styled';

const SaveButton = ({ isVisible, className }) => {
  return (
    <>
      <SaveBtn
        type="submit"
        isVisible={isVisible}
        className={className || ''}
        // className={isVisible ? className || '' : 'visualyHidden'}
      >
        Save changes
      </SaveBtn>
    </>
  );
};

export default SaveButton;
