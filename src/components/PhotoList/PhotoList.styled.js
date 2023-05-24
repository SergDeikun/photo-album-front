import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Backdrop from 'components/Backdrop/Backdrop';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

export const AlbumTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
`;
// PhotoList
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`;

export const Thumb = styled.div`
  /* width: 400px;
  height: 532px; */
  /* margin-top: 30px; */
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: #455a47;
    z-index: -1;
    transition: all 0.5s linear;
  } */
`;

export const LinkImg = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

// PhotoLightBox

export const Modal = styled(Backdrop)`
  background-color: rgb(0, 0, 0);
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 78px;
  display: flex;
`;

export const PhotoLightBoxImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DeleteBtn = styled(DeleteButton)`
  margin-right: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    fill: ${p => p.theme.colors.white};
  }

  &:hover {
    background-color: grey;
    border-radius: 50%;
    fill: ${p => p.theme.colors.white};
  }
`;

export const Comments = styled.p`
  color: white;
`;

export const Place = styled.p`
  color: white;
`;

export const Date = styled.p`
  color: white;
`;
