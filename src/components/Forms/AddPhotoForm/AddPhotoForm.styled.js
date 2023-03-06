import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const Box = styled.div`
  display: flex;
`;

export const WrapperInput = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const PlaceField = styled(TextField)`
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  margin-bottom: 30px inherit;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 6px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[1]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};

  transition: border-color 0.2s ease-in-out;

  label {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.grey};
    letter-spacing: 0.1rem;

    span {
      color: ${p => p.theme.colors.main};
    }

    &.Mui-focused {
      color: ${p => p.theme.colors.white};
    }
  }

  p {
    /* color: ${p => p.theme.colors.grey}; */
    /* color: ${p => p.theme.colors.white}; */
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    border-bottom: 2px solid grey;
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 1px solid #ccc;
  }
`;

export const DateField = styled(DesktopDatePicker)`
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    /* font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px; */
    color: ${p => p.theme.colors.grey};
    /* letter-spacing: 0.1rem; */
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    border-bottom: 1px solid #ccc;
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
`;
