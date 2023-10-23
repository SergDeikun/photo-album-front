import { useState, useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { motion, AnimatePresence } from 'framer-motion';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { ButtonMenu, MenuList, MenuItem, MenuLink } from './UserMenu.styled';

const UserMenu = () => {
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
          <motion.div
            ref={ref}
            key={isOpenMenu}
            style={{
              position: 'absolute',
              zindex: '10',
              width: '320px',
              left: '1050px',
              top: '0',
              backgroundColor: 'black',
              padding: '115px 20px',
            }}
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
            <CloseButton onClose={handleToggleMenu} />
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserMenu;
