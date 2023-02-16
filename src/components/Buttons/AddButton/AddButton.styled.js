import styled from 'styled-components';

export const AddAlbumButton = styled.button`
  margin-left: auto;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 30px;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: ${p => p.theme.colors.white};
`;
