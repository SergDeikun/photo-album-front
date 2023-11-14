import useOnclickOutside from 'react-cool-onclickoutside';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { Box, MenuList, MenuItem, MenuLink } from './UserMenu.styled';

const UserMenu = ({ onClose, className }) => {
  const token = Cookies.get('token');

  const ref = useOnclickOutside(() => {
    onClose();
  });

  return (
    <>
      <AnimatePresence>
        <Box
          className={className || ''}
          ref={ref}
          // key={isOpenMenu}
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
          <CloseButton onClose={onClose} />
          {token && (
            <MenuList>
              <MenuItem>
                <MenuLink to={'/'} onClick={onClose}>
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to={'/profile'} onClick={onClose}>
                  Profile
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to={'/album-list'} onClick={onClose}>
                  Albums
                </MenuLink>
              </MenuItem>
            </MenuList>
          )}
        </Box>
      </AnimatePresence>
    </>
  );
};

export default UserMenu;
