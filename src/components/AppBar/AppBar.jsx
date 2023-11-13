import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Cookies from 'js-cookie';

import Logo from 'components/Logo/Logo';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import HeaderButton from 'components/Buttons/HeaderButton/HeaderButton';
import Modal from 'components/Modal/Modal';
import AlbumForm from 'components/Forms/AlbumForm/AlbumForm';
import PhotoForm from 'components/Forms/PhotoForm/PhotoForm';

import { Wrapper, ButtonWrap, AddBtn } from './AppBar.styled';

const AppBar = () => {
  const token = Cookies.get('token');
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1279 });
  const [isOpenAlbumForm, setIsOpenAlbumForm] = useState(false);
  const [isOpenPhotoForm, setIsOpenPhotoForm] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const location = useLocation();
  const { albumId } = useParams();

  useEffect(() => {
    if (
      isOpenAlbumForm ||
      isOpenPhotoForm ||
      (isOpenUserMenu && isMobileOrTablet)
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }

    // todo: функцію винести в helpers
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        setIsOpenAlbumForm(false);
        setIsOpenPhotoForm(false);
        setIsOpenUserMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isMobileOrTablet, isOpenAlbumForm, isOpenPhotoForm, isOpenUserMenu]);

  const handleToggleAlbumForm = () => {
    setIsOpenAlbumForm(!isOpenAlbumForm);
  };

  const handleTogglePhotoForm = () => {
    setIsOpenPhotoForm(!isOpenPhotoForm);
  };

  const handleToggleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
  };

  return (
    <Wrapper>
      <Logo />

      {!token ? (
        isTabletOrDesktop && <AuthMenu />
      ) : (
        <ButtonWrap>
          {location.pathname === '/album-list' && (
            <AddBtn title="Add album" onClick={handleToggleAlbumForm} />
          )}
          {location.pathname === `/album/${albumId}` && (
            <AddBtn title="Add photo" onClick={handleTogglePhotoForm} />
          )}
          <HeaderButton title="Menu" onClick={handleToggleUserMenu}>
            Menu
          </HeaderButton>
        </ButtonWrap>
      )}

      {isOpenAlbumForm && (
        <Modal onClose={handleToggleAlbumForm}>
          {/* <AlbumForm onClose={handleToggleAlbumForm} /> */}
          <AlbumForm onClose={handleToggleAlbumForm} />
        </Modal>
      )}
      {isOpenPhotoForm && (
        <Modal onClose={handleTogglePhotoForm}>
          <PhotoForm onClose={handleTogglePhotoForm} />
        </Modal>
      )}

      {isOpenUserMenu && <UserMenu onClose={handleToggleUserMenu} />}
    </Wrapper>
  );
};

export default AppBar;
