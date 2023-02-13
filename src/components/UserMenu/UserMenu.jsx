import { useState } from 'react';
import Backdrop from 'components/Backdrop/Backdrop';

import {
  ButtonMenu,
  CloseBatton,
  WrapperLink,
  AlbumLink,
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
          <CloseBatton type="button" onClick={handleCloseMenu}>
            X
          </CloseBatton>

          <WrapperLink>
            <AlbumLink>Profile</AlbumLink>
            <AlbumLink>Albums</AlbumLink>

            <button>Log out</button>
          </WrapperLink>
        </Backdrop>
      )}
    </>
  );
};

export default UserMenu;
