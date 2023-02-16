import styled from 'styled-components';

import TextField from '@mui/material/TextField';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 445px;
`;

export const Input = styled(TextField)`
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
      color: ${p => p.theme.colors.darkGrey};
    }
  }

  p {
    color: ${p => p.theme.colors.grey};
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

export const ButtonForgot = styled.button`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  background-color: transparent;
  border: none;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  text-decoration: underline;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.darkGrey};
  }
`;
