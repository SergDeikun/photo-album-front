import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
  transition: all 0.2s ease-in-out;
  z-index: 5;
  box-shadow: ${p => p.shadow};
`;
