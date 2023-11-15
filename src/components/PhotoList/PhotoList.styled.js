import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export const AlbumTitle = styled.h1`
  position: absolute;
  /* top: 45px; */
  /* left: 50%; */
  top: 10px;

  left: 0;

  /* transform: translate(-50%); */
  z-index: 10;
  /* opacity: 0.1; */
  opacity: 0.3;

  font-family: ${p => p.theme.fonts.second};
  /* font-size: ${p => p.theme.fontSize[2]}px; */
  font-size: ${p => p.theme.fontSize[3]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  text-align: center;

  @media ${p => p.theme.device.tablet} {
    top: 35px;
    width: 300px;
    font-size: ${p => p.theme.fontSize[3]}px;
  }

  @media ${p => p.theme.device.desktop} {
    top: -5px;
    left: 50%;
    width: 500px;
    transform: translate(-50%);
    font-size: ${p => p.theme.fontSize[4]}px;
  }
`;
// PhotoList
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media ${p => p.theme.device.tablet} {
    padding: 0 40px 0 40px;
    gap: 30px;
  }

  @media ${p => p.theme.device.desktop} {
    padding: 0;
    gap: 50px;
  }
`;

export const PhotoItem = styled.li`
  border-radius: ${p => p.theme.borderRadius.small};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  flex-basis: calc((100% - 30px) / 3);

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 60px) / 3);
  }

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 100px) / 3);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #234d58;
    transform: translateY(100%);
    transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ${p => p.isLoaded && '&:after {transform: translateY(-100%)}'};
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${p => p.isLoaded && 'transform:translateY(0);opacity:1'};
`;

export const LinkImg = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const ImageLazyLoad = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-delay: 0.4s;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.02;
  }
`;
