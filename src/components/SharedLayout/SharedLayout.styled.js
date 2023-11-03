import styled from 'styled-components';

import Container from 'components/Container/Container';

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
  max-width: 100%;
`;
