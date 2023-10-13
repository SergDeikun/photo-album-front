import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export const AlbumTitle = styled.h1`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  opacity: 0.1;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-bottom: 20px;
`;
// PhotoList
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: 80px;
`;

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

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
