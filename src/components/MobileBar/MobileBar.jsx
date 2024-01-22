import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import AuthMenu from 'components/AuthMenu/AuthMenu';
import Modal from 'components/Modal/Modal';
import AlbumForm from 'components/Forms/AlbumForm/AlbumForm';
import PhotoForm from 'components/Forms/PhotoForm/PhotoForm';

import { Box, MenuBtn, MobileUserMenu, AddBtn } from './MobileBar.styled';

const MobileBar = () => {
  const token = Cookies.get('token');

  const [isOpenAlbumForm, setIsOpenAlbumForm] = useState(false);
  const [isOpenPhotoForm, setIsOpenPhotoForm] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const location = useLocation();
  const { albumId } = useParams();

  useEffect(() => {
    if (isOpenAlbumForm || isOpenPhotoForm || isOpenUserMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenAlbumForm, isOpenPhotoForm, isOpenUserMenu]);

  const handleToggleAlbumForm = () => {
    setIsOpenAlbumForm(!isOpenAlbumForm);
  };

  const handleTogglePhotoForm = () => {
    setIsOpenPhotoForm(!isOpenPhotoForm);
  };

  const handleToggleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
  };

  const renderMenu = () => {
    if (token) {
      return (
        <>
          {location.pathname === '/album-list' && (
            <AddBtn title="Add" onClick={handleToggleAlbumForm} />
          )}
          {location.pathname === `/album/${albumId}` && (
            <AddBtn title="Add" onClick={handleTogglePhotoForm} />
          )}

          <MenuBtn title="Menu" onClick={handleToggleUserMenu} />
        </>
      );
    } else {
      return <AuthMenu />;
    }
  };

  return (
    <>
      <Box token={token}>{renderMenu()}</Box>

      {isOpenUserMenu && <MobileUserMenu onClose={handleToggleUserMenu} />}

      {isOpenAlbumForm && (
        <Modal onClose={handleToggleAlbumForm}>
          <AlbumForm onClose={handleToggleAlbumForm} />
        </Modal>
      )}

      {isOpenPhotoForm && (
        <Modal onClose={handleTogglePhotoForm}>
          <PhotoForm onClose={handleTogglePhotoForm} />
        </Modal>
      )}
    </>
  );
};

export default MobileBar;
