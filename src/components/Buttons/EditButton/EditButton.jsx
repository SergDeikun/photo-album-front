// import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Btn, EditIcon } from './EditButton.styled';

const EditButton = ({ onChange }) => {
  return (
    <>
      <Btn type="button" onClick={onChange}>
        <EditIcon />
      </Btn>
    </>
  );
};

export default EditButton;
