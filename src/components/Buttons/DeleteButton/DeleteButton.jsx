import { Btn, DeleteIcon } from './DeleteButton.styled';

const DeleteButton = ({ onDelete, disabled, className }) => {
  return (
    <>
      <Btn
        type="button"
        onClick={onDelete}
        disabled={disabled}
        className={className || ''}
      >
        <DeleteIcon />
      </Btn>
    </>
  );
};

export default DeleteButton;
