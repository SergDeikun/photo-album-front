import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 150px;
  padding: 0 20px 0 20px;
`;

export const Item = styled.li`
  position: relative;

  margin-bottom: 20px;
  flex-basis: calc((100% - 20px) / 2);

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
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  padding: 10px 10px;
  background-image: linear-gradient(
    transparent 0 25%,
    ${p => p.theme.colors.black}
  );
  color: ${p => p.theme.colors.white};

  /* padding-top: 10px; */
  /* width: 600px; */
  word-break: break-word;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  /* color: ${p => p.theme.colors.black}; */
`;
