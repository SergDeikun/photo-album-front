import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useGetCurrentUser from 'react-query/useGetCurrentUser';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import AddButton from 'components/Buttons/AddButton/AddButton';
import AddAlbumForm from 'components/Forms/AddalbumForm/AddAlbumForm';
import AddPhotoForm from 'components/Forms/AddPhotoForm/AddPhotoForm';

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
      {isOpenAlbumForm && <AddAlbumForm onClose={handleToggleAlbumForm} />}
      {isOpenPhotoForm && <AddPhotoForm onClose={handleTogglePhotoForm} />}
    </Wrapper>
  );
};

export default AppBar;
