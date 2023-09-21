import styled from 'styled-components';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const DateField = styled(DesktopDatePicker)`
  width: 100%;
  input {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.white};
    padding: 10px 6px;
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
    border-radius: 0;
  }

  legend {
    span {
      color: ${p => p.theme.colors.grey};
    }
  }

  .mdc-datetime-picker .mdc-datetime-picker__input-container .mdc-icon-button {
    position: absolute;
    top: 0;
    left: 0;
  }

  /* .mdc-datetime-picker .mdc-datetime-picker__input-container .mdc-icon-button {
    float: left;
  } */

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    color: ${p => p.theme.colors.grey};
  }

  &.Mui-focused {
    color: white;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutLinedInput-root.Mui-focused.MuiOutLinedInput-notchedOutline {
    border: none;
    /* border-bottom: 2px solid white; */

    border-color: transparent;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutLinedInput-root {
    float: start;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    /* border-color: transparent; */
    border: none;
    /* border-bottom: 2px solid white; */
  }

  .css-i4bv87-MuiSvgIcon-root {
    fill: ${p => p.theme.colors.grey};
  }
`;
