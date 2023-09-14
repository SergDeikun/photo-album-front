import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import useLogout from 'react-query/useLogout';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

// import Modal from 'components/Modal/Modal';
// import Button from 'components/Buttons/Button';

import {
  ButtonMenu,
  MenuBox,
  // CloseBtn,
  MenuList,
  MenuItem,
  MenuLink,
} from './UserMenu.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  // const navigate = useNavigate();
  // const { mutateAsync: logout } = useLogout();

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = 'hidden';
    } else {
      // document.body.style.overflow = 'auto';
    }

    // todo: функцію винести в helpers
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscClose);

    return () => {
      // document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu> */}

      {isOpen && (
        <MenuBox isOpen={isOpen}>
          <CloseButton onClick={handleToggleMenu} />
          <MenuList>
            <MenuItem>
              <MenuLink to={'/'} onClick={handleToggleMenu}>
                Home page
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to={'/profile'} onClick={handleToggleMenu}>
                Profile
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to={'/album-list'} onClick={handleToggleMenu}>
                Albums
              </MenuLink>
            </MenuItem>
          </MenuList>

          {/* <Button
            type="button"
            title="Log out"
            onClick={handleLogout}
            // disabled={isLoading}
          /> */}
        </MenuBox>
      )}
    </>
  );
};

export default UserMenu;
