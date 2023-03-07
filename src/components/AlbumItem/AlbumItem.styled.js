import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  /* align-items: end; */
  /* padding: 10px; */
  /* background-color: azure; */
  /* height: 600px; */
  width: 600px;
  /* margin-bottom: 20px; */
  /* flex-basis: calc((100% - 10px) / 2); */
  /* border: 1px solid black; */

  &:nth-child(2n + 1) {
    /* margin-right: 10px; */
  }
`;
export const LinkItem = styled(Link)`
  width: 100%;
  /* height: 100%; */
`;

export const ImageBox = styled.div`
  /* width: 600px; */
  height: 500px;
  background-color: azure;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const AlbumName = styled.h2`
  /* text-align: center; */
  margin-top: 30px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
