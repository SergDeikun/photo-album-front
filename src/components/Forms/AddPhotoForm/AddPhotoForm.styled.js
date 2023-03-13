import styled from 'styled-components';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const Box = styled.div`
  display: flex;
`;

export const FileWrapper = styled.div``;

export const FieldWrapper = styled.div`
  /* display: flex; */
  margin-left: 100px;
`;

export const InputWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DateLabel = styled.label`
  color: ${p => p.theme.colors.white};
`;

export const DateField = styled(DesktopDatePicker)`
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    /* font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px; */
    color: ${p => p.theme.colors.grey};
    /* letter-spacing: 0.1rem; */
  }

  &.Mui-focused {
    color: white;
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

  .css-i4bv87-MuiSvgIcon-root {
    fill: white;
  }
`;
