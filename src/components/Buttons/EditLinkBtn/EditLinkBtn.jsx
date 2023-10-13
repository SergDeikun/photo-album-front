// import { EditLink, EditIcon } from './EditButton.styled';
import { EditLink, EditIcon } from './EditLinkBtn.styled';

const EditLinkBtn = ({ to }) => {
  return (
    <>
      <EditLink to={to}>
        <EditIcon />
      </EditLink>
    </>
  );
};

export default EditLinkBtn;
