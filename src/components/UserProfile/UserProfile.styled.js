import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper/react';

import { FaUser } from 'react-icons/fa';

import Button from 'components/Buttons/Button';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import DefaultCover from 'components/DefaultCover/DefaultCover';

//* User
export const UserWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media ${p => p.theme.device.tablet} {
    align-items: center;
    padding: 0 20px;
  }
`;

export const Avatar = styled(FaUser)`
  width: 100px;
  height: 100px;
  fill: ${p => p.theme.colors.black};
`;

//* Form

export const UserForm = styled.form`
  height: 200px;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }

  @media ${p => p.theme.device.tablet} {
    position: relative;
    margin-left: 20px;
    margin-top: 0;
  }

  @media ${p => p.theme.device.desktop} {
    margin-left: 50px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    box-shadow: 0px -1px 0px ${p => p.theme.colors.red};
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }
  &:hover:after,
  &:focus-within:after {
    transform: rotate(0deg);
  }
`;

export const SaveBtn = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.red};
  color: ${p => p.theme.colors.white};
  opacity: ${p => (p.isVisible ? 1 : 0)};
  transition: opacity 0.5s linear;

  visibility: ${p => (p.isVisible ? 'visible' : 'hidden')};

  @media ${p => p.theme.device.tablet} {
    position: absolute;
    bottom: 0;
  }
`;

export const Field = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;
  color: ${p => p.theme.colors.black};
`;

export const LogOutBtn = styled(Button)`
  margin-top: 20px;

  @media ${p => p.theme.device.tablet} {
    margin-top: auto;
    margin-left: auto;
  }
`;

//*Friends albums

export const SwiperContainer = styled(Swiper)`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-pagination-bullet {
    background-color: ${p => p.theme.colors.grey};
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${p => p.theme.colors.red};
    border-radius: 10px;
    width: 15px;

    transition: width 0.3s ease;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-size: 30px;
    z-index: 15px;
    color: ${p => p.theme.colors.black};
    padding: 10px;
    border-radius: 10px;
    background-color: ${p => p.theme.colors.grey};
  }

  .swiper-button-next {
    right: 50px;
  }

  .swiper-button-prev {
    left: 50px;
  }
`;
export const NextButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: teal;
`;

export const SlideLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const CoverDefault = styled(DefaultCover)`
  height: 100%;
`;

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
  padding: 10px 10px 10px 10px;
  background-image: linear-gradient(
    transparent 0 10%,
    ${p => p.theme.colors.black}
  );
`;

//*Albums

export const Title = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  padding: 30px 0;
`;

export const AlmumsList = styled.ul`
  @media ${p => p.theme.device.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const AlbumItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  width: 100%;
  height: 400px;
  border-radius: ${p => p.theme.borderRadius.small};
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 10px) / 2);

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media ${p => p.theme.device.desktop} {
    flex-basis: calc((100% - 30px) / 4);
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const LinkAlbum = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AlbumCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImg }) =>
    backgroundImg ? `url(${backgroundImg})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  align-items: end;
`;

//* EditBox

export const EditBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(
      transparent 0 25%,
      ${p => p.theme.colors.black}
    ),
    linear-gradient(transparent, transparent, ${p => p.theme.colors.black});
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  transition: opacity 0.5s linear;

  @media ${p => p.theme.device.desktop} {
    opacity: 0;

    ${AlbumItem}:hover & {
      opacity: 1;
    }
  }
`;

export const AlbumName = styled.p`
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
  padding-left: 10px;
`;

export const DeleteBtn = styled(DeleteButton)`
  svg {
    fill: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.device.desktop} {
    &:hover {
      background-color: transparent;
      svg {
        fill: ${p => p.theme.colors.white};
      }
    }
  }
`;
