import { Btn, DeleteIcon } from './DeleteButton.styled';

const DeleteButton = ({ onDelete }) => {
  return (
    <>
      <Btn type="button" onClick={onDelete}>
        <DeleteIcon />
      </Btn>
    </>
  );
};

export default DeleteButton;
