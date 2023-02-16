import { AddAlbumButton } from './AddButton.styled';

const AddButton = ({ onClick }) => {
  return (
    <>
      <AddAlbumButton onClick={onClick}>add album</AddAlbumButton>
    </>
  );
};

export default AddButton;
