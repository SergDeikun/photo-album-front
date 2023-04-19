import { useState, useEffect } from 'react';

import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';

import { ButtonMenu, MenuLink } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // todo: функцію винести в helpers
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return (
    <>
      <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu>

      {isOpen && (
        <Modal onClose={handleToggleMenu}>
          <MenuLink to={'/current-user'} onClick={handleToggleMenu}>
            Profile
          </MenuLink>
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
