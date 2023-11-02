import styled from 'styled-components';

export const BackdropBox = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 15;
  background-color: ${p => p.theme.colors.black};

  width: 100%;
  height: 100%;
`;
