import { AddBtn } from './AddButton.styled';

const AddButton = ({ onClick, title }) => {
  return (
    <>
      <AddBtn type="button" onClick={onClick}>
        {title}
      </AddBtn>
    </>
  );
};

export default AddButton;
