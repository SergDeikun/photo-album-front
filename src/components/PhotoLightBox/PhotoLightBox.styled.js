import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import CommentsInput from 'components/Inputs/CommentsInput/CommentsInput';
import DateInput from 'components/Inputs/DateInput/DateInput';
import Autocomplite from 'components/Autocomplite/Autocomplite';
import Button from 'components/Buttons/Button';

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;

  top: 10px;
  /* right: 64px; */
  right: 10px;
  display: flex;

  @media ${p => p.theme.device.tablet} {
    /* right: 74px; */
  }

  @media ${p => p.theme.device.desktop} {
    /* right: 68px; */
  }
`;

export const ClosePhotoBtn = styled(CloseButton)`
  position: static;
`;

//* PrevButton

export const PrevBtnWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  cursor: initial;
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 12px;
  border: none;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.grey};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* background-color: rgba(66, 66, 66, 0.54); */

  @media ${p => p.theme.device.desktop} {
    opacity: 0;

    ${PrevBtnWrap}:hover & {
      opacity: 1;
    }
  }
`;

export const PrevButtonIcon = styled(GrFormPrevious)`
  width: 36px;
  height: 36px;
`;

//* Image

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet {
    background-color: ${p => p.theme.colors.grey};

    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${p => p.theme.colors.red};
  }
`;

export const Slide = styled(SwiperSlide)`
  background-color: ${p => p.theme.colors.black};
`;

export const PhotoLightBoxImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  cursor: initial;

  @media ${p => p.theme.device.tablet} {
    height: 100%;
    object-fit: contain;
  }
  /* object-position: center; */
`;

//* NextButton

export const NextBtnWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  cursor: initial;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 12px;
  border: none;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.grey};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${p => p.theme.device.desktop} {
    opacity: 0;

    ${NextBtnWrap}:hover & {
      opacity: 1;
    }
  }
`;

export const NextButtonIcon = styled(GrFormNext)`
  width: 36px;
  height: 36px;
`;

//* Info

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;

  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colors.bodyBg};
  box-sizing: border-box;
  /* padding: 75px 10px 0 10px; */
  padding-top: 75px;

  @media ${p => p.theme.device.tablet} {
    width: 360px;
  }
`;

export const Form = styled.form`
  height: 100%;
  position: relative;
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &:after {
    content: ' ';
    position: absolute;
    width: 95%;
    bottom: 0;
    left: 5px;
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

export const Comments = styled(CommentsInput)`
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  border: none;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.12); */
  width: 100%;
  height: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  /* &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.red};
  } */
`;

export const DateField = styled(DateInput)`
  input {
    color: ${p => p.theme.colors.black};
  }

  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.red};
  }
`;

export const Place = styled(Autocomplite)`
  input {
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.black};
    overflow-wrap: break-word;
  }

  ul {
    background-color: ${p => p.theme.colors.grey};
  }

  li {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      color: ${p => p.theme.colors.red};
    }
  }
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: ${p => p.theme.colors.red};
  color: ${p => p.theme.colors.white};

  @media (max-width: 767px) {
    width: 100%;
    height: 70px;
  }

  @media ${p => p.theme.device.tablet} {
    bottom: 10px;
  }
`;
