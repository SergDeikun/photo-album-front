import styled from 'styled-components';

import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
export const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.bodyBg};
  transition: all 0.2s ease-in-out;
  z-index: 5;
  box-shadow: ${p => p.shadow};
`;

export const BoxContainer = styled(Container)`
  text-align: center;
  position: relative;

  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
`;

export const LogoHeader = styled(Logo)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
`;
