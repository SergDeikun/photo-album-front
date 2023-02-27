import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';
// import AddAlbumForm from 'components/Forms/AddAlbumForm/AddAlbumForm';
// import AddPhotoForm from 'components/Forms/AddPhotoForm/AddPhotoForm';

import { ButtonMenu, MenuLink } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* TODO: форму рендерити інакше  */}
      {/* <AddAlbumForm />
      <AddPhotoForm /> */}
      <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu>

      {isOpen && (
        <Modal onClick={handleToggleMenu}>
          <MenuLink>Profile</MenuLink>
          {/* TODO Можна onClik на Link */}
          <MenuLink to={'/album-list'} onClick={handleToggleMenu}>
            Albums
          </MenuLink>

          <Button type="batton" title={'Log out'} />
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
