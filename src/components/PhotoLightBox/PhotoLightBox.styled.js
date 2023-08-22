import styled from 'styled-components';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

import Backdrop from 'components/Backdrop/Backdrop';
// import Backdrop from 'components/Backdrop/Backdrop';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import Autocomplite from 'components/Autocomplite/Autocomplite';

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
    background-color: ${p => p.theme.colors.grey};
    border-radius: 50%;
    fill: ${p => p.theme.colors.white};
  }
`;

export const PrevBtnWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 20px;
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
  opacity: 0;
  background-color: ${p => p.theme.colors.grey};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* background-color: rgba(66, 66, 66, 0.54); */

  ${PrevBtnWrap}:hover & {
    opacity: 1;
  }
`;

export const PrevButtonIcon = styled(GrFormPrevious)`
  width: 36px;
  height: 36px;
  /* fill: ${p => p.theme.colors.white}; */
`;

export const NextBtnWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 20px;
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
  opacity: 0;
  background-color: ${p => p.theme.colors.grey};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${NextBtnWrap}:hover & {
    opacity: 1;
  }
`;

export const NextButtonIcon = styled(GrFormNext)`
  width: 36px;
  height: 36px;
  /* fill: ${p => p.theme.colors.white}; */
`;

// Image

export const PhotoLightBoxImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 95%; */
  height: 100%;
  cursor: initial;
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
