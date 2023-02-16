import styled from 'styled-components';

export const AlbumList = styled.ul`
  /* margin-top: 80px; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const AlbumItem = styled.li`
  display: flex;
  align-items: end;
  padding: 10px;
  background-color: azure;
  height: 600px;
  width: 600px;
  /* margin-bottom: 20px; */
  /* flex-basis: calc((100% - 10px) / 2); */
  border: 1px solid black;

  &:nth-child(2n + 1) {
    /* margin-right: 10px; */
  }
`;

export const AlbumName = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
