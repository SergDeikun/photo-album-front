import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import useGetCurrentUser from 'react-query/useGetCurrentUser';
// import { useGetQuery } from 'react-query/useGetQuery';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Modal from 'components/Modal/Modal';
import AlbumForm from 'components/Forms/AlbumForm/AlbumForm';
import PhotoForm from 'components/Forms/PhotoForm/PhotoForm';

import { Wrapper, ButtonWrap } from './AppBar.styled';

const AppBar = () => {
  const [isOpenAlbumForm, setIsOpenAlbumForm] = useState(false);
  const [isOpenPhotoForm, setIsOpenPhotoForm] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const { data } = useGetCurrentUser();
  // const data = useGetQuery('user');
  // const data = queryCache.getQueryData('user');
  // console.log(data);

  const handleToggleAlbumForm = () => {
    setIsOpenAlbumForm(!isOpenAlbumForm);
  };

  const handleTogglePhotoForm = () => {
    setIsOpenPhotoForm(!isOpenPhotoForm);
  };

  useEffect(() => {
    // todo: функцію винести в helpers
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        setIsOpenAlbumForm(false);
        setIsOpenPhotoForm(false);
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return (
    <Wrapper>
      <Logo />
      {data ? (
        <ButtonWrap>
          {location.pathname === '/album-list' && (
            <AddButton title="Add album" onClick={handleToggleAlbumForm} />
          )}
          {location.pathname === `/album/${id}` && (
            <AddButton title="Add photo" onClick={handleTogglePhotoForm} />
          )}

          <UserMenu />
        </ButtonWrap>
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
