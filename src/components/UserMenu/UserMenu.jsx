import { useState } from 'react';
import Backdrop from 'components/Backdrop/Backdrop';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import {
  ButtonMenu,
  CloseBatton,
  WrapperLink,
  MenuLink,
  LogoutButton,
} from './UserMenu.styled';

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
        <Backdrop>
          <CloseButton onClick={handleCloseMenu} />

          <WrapperLink>
            <MenuLink>Profile</MenuLink>
            {/* TODO Можна onClik на Link */}
            <MenuLink to={'/albums'} onClick={handleCloseMenu}>
              Albums
            </MenuLink>

            <LogoutButton>Log out</LogoutButton>
          </WrapperLink>
        </Backdrop>
      )}
    </>
  );
};

export default UserMenu;
