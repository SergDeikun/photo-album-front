import { AddAlbumButton } from './AddButton.styled';

const AddButton = ({ onClick }) => {
  return (
    <>
      <AddAlbumButton onClick={onClick}>Add album</AddAlbumButton>
    </>
  );
};

export default AddButton;
