import { MdOutlineDelete } from 'react-icons/md';

const DeleteButton = ({ onDelete }) => {
  return (
    <>
      <button type="button" onClick={onDelete}>
        <MdOutlineDelete />
      </button>
    </>
  );
};

export default DeleteButton;
