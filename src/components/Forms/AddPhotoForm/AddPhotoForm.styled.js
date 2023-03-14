import styled from 'styled-components';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  /* color: ${p => p.theme.colors.white}; */
  color: ${p => p.theme.colors.grey};
  margin-bottom: 50px;
`;

export const Box = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
`;

export const PlaceDateWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const DateLabel = styled.label`
  color: ${p => p.theme.colors.white};
`;

export const DateField = styled(DesktopDatePicker)`
  input {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.white};
    /* border-bottom: 2px solid white; */

    outline: none;
  }

  label {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.grey};
    letter-spacing: 0.1rem;

    &.Mui-focused {
      color: ${p => p.theme.colors.white};
    }
  }

  fieldset {
    border: none;
  }

  legend {
    span {
      color: ${p => p.theme.colors.grey};
    }
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    color: ${p => p.theme.colors.grey};
  }

  &.Mui-focused {
    color: white;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutLinedInput-root.Mui-focused.MuiOutLinedInput-notchedOutline {
    border: none;
    border-color: transparent;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    /* border-color: transparent; */
    border: none;
    border-bottom: 2px solid white;
  }

  .css-i4bv87-MuiSvgIcon-root {
    fill: ${p => p.theme.colors.grey};
  }
`;

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
`;
