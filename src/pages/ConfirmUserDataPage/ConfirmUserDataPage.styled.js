import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSize[3]}px;
  /* width: 300px; */
  color: ${p => p.theme.colors.black};
`;
