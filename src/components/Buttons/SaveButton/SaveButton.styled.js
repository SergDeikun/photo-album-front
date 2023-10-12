import styled from 'styled-components';

export const SaveBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSize[1]}px;
  font-family: ${p => p.theme.fonts.button};
  color: ${p => p.theme.colors.red};
  padding: 10px;
  opacity: ${p => (p.isVisible ? 1 : 0)};
`;
