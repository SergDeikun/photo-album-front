import styled from 'styled-components';

export const CloseBatton = styled.button`
  position: absolute;
  top: 30px;
  right: 120px;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSize[1]}px;
`;
