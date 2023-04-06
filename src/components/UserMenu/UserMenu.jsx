import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';

import { ButtonMenu, MenuLink } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu>

      {isOpen && (
        <Modal onClick={handleToggleMenu}>
          <MenuLink>Profile</MenuLink>
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
