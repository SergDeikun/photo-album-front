import { Btn, DeleteIcon } from './DeleteButton.styled';

const DeleteButton = ({ onDelete, className }) => {
  return (
    <>
      <Btn type="button" onClick={onDelete} className={className || ''}>
        <DeleteIcon />
      </Btn>
    </>
  );
};

export default DeleteButton;
