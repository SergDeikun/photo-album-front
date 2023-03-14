import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const TxtField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    line-height: 1.88;
    letter-spacing: 0.1rem;
    color: ${p => p.theme.colors.white};
    padding: 6px;
    transition: border-color 0.2s ease-in-out;
    border-bottom: 2px solid white;
  }

  label {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.white};
    letter-spacing: 0.1rem;

    span {
      color: ${p => p.theme.colors.red};
    }

    &.Mui-focused {
      color: ${p => p.theme.colors.white};
    }
  }

  p {
    color: ${p => p.theme.colors.white};
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    /* border-bottom: 2px solid white; */
    border: none;
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:before {
    /* border-bottom: 2px solid white; */
    border: none;
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
    /* border-bottom: 2px solid white; */
    border: none;
  }
`;
