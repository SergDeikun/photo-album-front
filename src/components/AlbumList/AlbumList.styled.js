import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin-top: 40px;
  padding: 0 20px 0 20px;
  /* padding-left: 20px; */
  /* gap: 20px; */
`;

export const Item = styled.li`
  /* outline: 1px solid tomato; */
  /* width: 600px;
  height: 500px; */

  /* display: flex; */
  /* flex-wrap: wrap; */
  margin-bottom: 20px;
  flex-basis: calc((100% - 20px) / 2);
  /* gap: 20px; */

  &:nth-child(2n + 1) {
    margin-right: 20px;
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  width: 100%;
`;

export const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumName = styled.h2`
  /* padding: 5px 0 5px 10px; */
  padding-top: 10px;
  width: 600px;
  word-break: break-word;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* border: 1px solid black; */
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
