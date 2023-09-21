import styled from 'styled-components';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import Autocomplite from 'components/Autocomplite/Autocomplite';
// export const Title = styled.h1`
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSize[2]}px;
//   font-weight: ${p => p.theme.fontWeights.medium};
//   /* color: ${p => p.theme.colors.white}; */
//   color: ${p => p.theme.colors.grey};
//   margin-bottom: 50px;
// `;

export const Place = styled(Autocomplite)`
  /* div {
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    overflow: hidden;
  } */

  label {
    display: block;
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
    color: ${p => p.theme.colors.grey};
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

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FieldWrapper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* margin-left: 100px; */
  margin-left: 100px;
`;

export const InputWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 20px;
  position: relative;
`;

// Textarea

export const Comments = styled(TextareaAutosize)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  padding: 6px;
  background-color: transparent;
  color: ${p => p.theme.colors.grey};
  resize: none;
  outline: none;
  width: 435px;
  height: 175px !important;
`;
