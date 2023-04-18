import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Modal from 'components/Modal/Modal';
import AlbumForm from 'components/Forms/AlbumForm/AlbumForm';
import PhotoForm from 'components/Forms/PhotoForm/PhotoForm';

import { Wrapper } from './AppBar.styled';

const AppBar = () => {
  const [isOpenAlbumForm, setIsOpenAlbumForm] = useState(false);
  const [isOpenPhotoForm, setIsOpenPhotoForm] = useState(false);

  const { id } = useParams();
  const { data } = useGetCurrentUser();

  const handleToggleAlbumForm = () => {
    setIsOpenAlbumForm(!isOpenAlbumForm);
  };

  const handleTogglePhotoForm = () => {
    setIsOpenPhotoForm(!isOpenPhotoForm);
  };

  return (
    <Wrapper>
      <Logo />
      {data ? (
        <>
          {id ? (
            <AddButton title="Add photo" onClick={handleTogglePhotoForm} />
          ) : (
            <AddButton title="Add album" onClick={handleToggleAlbumForm} />
          )}

          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
      {isOpenAlbumForm && (
        <Modal onClose={handleToggleAlbumForm}>
          <AlbumForm />
        </Modal>
      )}
      {isOpenPhotoForm && (
        <Modal onClose={handleTogglePhotoForm}>
          <PhotoForm />
        </Modal>
      )}
    </Wrapper>
  );
};

export default AppBar;
