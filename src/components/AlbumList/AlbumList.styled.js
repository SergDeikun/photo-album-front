import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 20px; */

  /* justify-content: center; */
`;

export const Item = styled.li`
  display: flex;
  /* align-items: end; */
  /* padding: 10px; */
  /* height: 600px; */
  /* width: 600px; */
  margin-bottom: 20px;
  flex-basis: calc((100% - 20px) / 2);

  /* border: 1px solid black; */

  &:nth-child(2n + 1) {
    margin-right: 20px;
  }
`;

export const LinkItem = styled(Link)`
  /* position: relative; */
  display: block;
  width: 100%;
  /* height: 100%; */
`;

export const ImageBox = styled.div`
  /* width: 600px; */
  /* height: 500px; */
  background-color: azure;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const AlbumName = styled.h2`
  /* text-align: center; */
  margin-top: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
