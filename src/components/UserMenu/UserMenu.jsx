import { useState, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';

import Modal from 'components/Modal/Modal';

import {
  ButtonMenu,
  Box,
  MenuList,
  MenuItem,
  MenuLink,
  Auth,
} from './UserMenu.styled';

const UserMenu = () => {
  const token = Cookies.get('token');
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    // todo: функцію винести в helpers
    const handleEscClose = e => {
      if (e.keyCode === 27) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpenMenu]);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const ref = useOnclickOutside(() => {
    setIsOpenMenu(false);
  });

  return (
    <>
      <ButtonMenu type="button" onClick={handleToggleMenu}>
        Menu
      </ButtonMenu>
      <AnimatePresence>
        {isOpenMenu && (
          <Modal onClose={handleToggleMenu}>
            <Box
              ref={ref}
              key={isOpenMenu}
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{ duration: 0.2 }}
            >
              {isMobile && !token && <Auth onClick={handleToggleMenu} />}

              {token && (
                <MenuList>
                  <MenuItem>
                    <MenuLink to={'/'} onClick={handleToggleMenu}>
                      Home
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
              )}
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserMenu;
