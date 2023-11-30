import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import CommentsInput from 'components/Inputs/CommentsInput/CommentsInput';
import DateInput from 'components/Inputs/DateInput/DateInput';
import Autocomplite from 'components/Autocomplite/Autocomplite';

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;

  top: 10px;
  right: 64px;
  display: flex;

  @media ${p => p.theme.device.tablet} {
    right: 74px;
  }

  @media ${p => p.theme.device.desktop} {
    right: 68px;
  }
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
    background-color: ${p => p.theme.colors.grey} !important;
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${p => p.theme.colors.red} !important;
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
  /* z-index: 15; */
  z-index: 34539999999;
  /* z-index: 2147483658; */

  height: 100%;
  width: 360px;
  background-color: ${p => p.theme.colors.bodyBg};
  box-sizing: border-box;
  padding: 75px 10px 0 10px;
`;

export const CloseInfoBtn = styled(CloseButton)`
  top: 5px;
  right: 310px;

  &:hover {
    background-color: transparent;

    svg {
      fill: ${p => p.theme.colors.red};
    }
  }
`;

export const Form = styled.form`
  /* margin-top: 20px; */
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 25px;
`;

export const Comments = styled(CommentsInput)`
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  width: 360px;
  height: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.red};
  }
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
  label {
    width: 100%;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSize[0]}px;
    line-height: 1.88;
    letter-spacing: 0.1rem;
    padding: 6px;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
    overflow-wrap: break-word;
  }

  ul {
    position: absolute;
    top: 35px;
    /* bottom: 35px; */
    left: 0;
    width: 100%;
    background-color: ${p => p.theme.colors.grey};
    z-index: 5;
  }

  li {
    color: ${p => p.theme.colors.black};
    padding: 6px 15px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      color: ${p => p.theme.colors.red};
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  color: ${props => props.theme.colors.red};
`;
