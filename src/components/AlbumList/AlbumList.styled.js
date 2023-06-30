import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Item = styled.li`
  /* outline: 1px solid tomato; */
  /* width: 600px;
  height: 500px; */

  /* display: flex; */
  /* flex-wrap: wrap; */
  margin-bottom: 20px;
  flex-basis: calc((100% - 20px) / 2);

  &:nth-child(2n + 1) {
    margin-right: 20px;
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  width: 100%;
  /* border: 3px solid black; */
`;

// export const ImageBox = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #2d545e;
// `;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumName = styled.h2`
  margin-top: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
