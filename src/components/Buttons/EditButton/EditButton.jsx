// import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Btn, EditIcon } from './EditButton.styled';

const EditButton = ({ onClick }) => {
  return (
    <>
      <Btn type="button" onClick={onClick}>
        <EditIcon />
      </Btn>
    </>
  );
};

export default EditButton;
