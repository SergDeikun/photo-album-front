import styled from 'styled-components';

import HeaderButton from 'components/Buttons/HeaderButton/HeaderButton';
import UserMenu from 'components/UserMenu/UserMenu';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';

export const Box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${p => (p.token ? 'space-around' : 'center')};
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  /* padding: 5px 0; */
  background-color: ${p => p.theme.colors.black};
`;

export const MenuBtn = styled(HeaderButton)`
  /* width: 100%; */
  /* width: ${p => (p.token ? '50%' : '100%')}; */
  width: 50%;
  margin: 0;
  color: ${p => p.theme.colors.white};
`;

export const MobileUserMenu = styled(UserMenu)`
  position: fixed;
  top: unset;
  bottom: 0;
`;

export const CloseBtn = styled(CloseButton)`
  width: 50%;
`;

export const AddBtn = styled(HeaderButton)`
  width: 50%;
  margin: 0;
  color: ${p => p.theme.colors.white};

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    right: 0;
    display: flex;
    width: 1px;
    height: 40px;
    background-color: ${p => p.theme.colors.darkGrey};
  }
`;
