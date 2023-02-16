import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import Button from 'components/Buttons/Button';

import { ButtonMenu, MenuLink, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ButtonMenu type="button" onClick={handleOpenMenu}>
        Menu
      </ButtonMenu>

      {isOpen && (
        <Modal onClick={handleCloseMenu}>
          <MenuLink>Profile</MenuLink>
          {/* TODO Можна onClik на Link */}
          <MenuLink to={'/albums'} onClick={handleCloseMenu}>
            Albums
          </MenuLink>

          <Button type="batton" title={'Log out'} />
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
