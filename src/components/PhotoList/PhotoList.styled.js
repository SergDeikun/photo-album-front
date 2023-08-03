import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { MdLocationPin } from 'react-icons/md';
// import { IoMdCalendar } from 'react-icons/io';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

import Backdrop from 'components/Backdrop/Backdrop';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import Autocomplite from 'components/Autocomplite/Autocomplite';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const AlbumTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-top: 80px;

  margin-bottom: 20px;
`;
// PhotoList
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
  padding-bottom: 20px;
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
    background: #234d58;
    transform: translateY(100%);
    transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ${p => p.isLoaded && '&:after {transform: translateY(-100%)}'};
`;

export const ImageWrapper = styled.div`
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.75s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${p => p.isLoaded && 'transform:translateY(0);opacity:1'};
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

// PhotoLightBox

export const Modal = styled(Backdrop)`
  background-color: rgb(0, 0, 0);
  /* position: relative; */
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 78px;
  display: flex;
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

export const PrevBtnWrap = styled.div`
  position: absolute;
  z-index: 5;

  top: 0;
  left: 20px;
  width: 40%;
  height: 100%;
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
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* background-color: transparent; */
  ${PrevBtnWrap}:hover & {
    opacity: 1;
  }
`;

export const PrevButtonIcon = styled(GrFormPrevious)`
  width: 36px;
  height: 36px;
  /* fill: ${p => p.theme.colors.white}; */
  fill: white;
`;

export const NextBtnWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 20px;
  width: 40%;
  height: 100%;
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
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${NextBtnWrap}:hover & {
    opacity: 1;
  }
`;

export const NextButtonIcon = styled(GrFormNext)`
  width: 36px;
  height: 36px;
  /* fill: ${p => p.theme.colors.white}; */
  fill: white;
`;

// Image

export const PhotoLightBoxImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 95%; */
  height: 100%;
  /* object-fit: contain;
  object-position: center; */
`;

// Info

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100%;
  width: 400px;
  background-color: ${p => p.theme.colors.bodyBg};
  padding: 10px;
`;

export const CloseBtn = styled(CloseButton)`
  right: 355px;

  svg {
    fill: ${p => p.theme.colors.black};
  }
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const FieldWrapper = styled.div`
  outline: 1px solid teal;
  margin-bottom: 20px;
`;

export const PlaceWrapper = styled.div`
  position: relative;
  /* margin-top: 100px; */
`;

export const Place = styled(Autocomplite)`
  label {
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    /* border-bottom: 2px solid white; */
    outline: none;
    padding: 6px;
    font-size: 18px;
    background-color: transparent;
    color: ${p => p.theme.colors.black};
    overflow-wrap: break-word;
  }

  ul {
    position: absolute;
    top: 35px;
    width: 100%;
    background-color: ${p => p.theme.colors.bodyBg};
    z-index: 5;
  }
  li {
    color: ${p => p.theme.colors.black};
    padding: 6px 15px;
    cursor: pointer;

    &:hover {
      background-color: ${p => p.theme.colors.grey};
    }
  }
`;

// export const ListInfo = styled.ul`
//   margin-top: 80px;
//   text-align: start;
//   padding-left: 10px;
// `;

// export const ItemInfo = styled.li`
//   /* width: 100%; */
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   font-family: ${p => p.theme.fonts.body};
//   font-weight: ${p => p.theme.fontWeights.regular};
//   font-size: ${p => p.theme.fontSize[0]}px;
//   line-height: 1.3;
//   letter-spacing: 0.1rem;
//   color: ${p => p.theme.colors.black};
// `;

// export const DateIcon = styled(IoMdCalendar)`
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
// `;

// export const PlaceIcon = styled(MdLocationPin)`
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
//   fill: ${p => p.theme.colors.grey};
// `;

// export const Infotext = styled.p`
//   /* width: 100%; */
//   overflow: hidden;
//   word-wrap: break-word;
// `;
