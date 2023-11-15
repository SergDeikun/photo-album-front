import styled from 'styled-components';

import HeaderButton from 'components/Buttons/HeaderButton/HeaderButton';
import UserMenu from 'components/UserMenu/UserMenu';

export const Box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${p => (p.token ? 'space-around' : 'center')};
  background-color: ${p => p.theme.colors.black};
`;

export const MenuBtn = styled(HeaderButton)`
  width: 100%;
  height: 100%;
  margin: 0;
  color: ${p => p.theme.colors.white};
`;

export const MobileUserMenu = styled(UserMenu)`
  position: fixed;
  z-index: 10;
  bottom: 0;
`;

export const AddBtn = styled(HeaderButton)`
  width: 100%;
  height: 100%;
  margin: 0;
  color: ${p => p.theme.colors.white};

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    right: 0;
    display: flex;
    width: 1px;
    height: 40px;
    background-color: ${p => p.theme.colors.darkGrey};
  }
`;