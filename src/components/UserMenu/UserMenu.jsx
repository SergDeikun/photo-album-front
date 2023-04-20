import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useLogout from 'react-query/useLogout';

import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';

import { ButtonMenu, MenuLink } from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useLogout();

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

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu>

      {isOpen && (
        <Modal onClose={handleToggleMenu}>
          <MenuLink to={'/'} onClick={handleToggleMenu}>
            Home page
          </MenuLink>
          <MenuLink to={'/current-user'} onClick={handleToggleMenu}>
            Profile
          </MenuLink>
          <MenuLink to={'/album-list'} onClick={handleToggleMenu}>
            Albums
          </MenuLink>

          <Button
            type="button"
            title="Log out"
            onClick={handleLogout}
            // disabled={isLoading}
          />
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
