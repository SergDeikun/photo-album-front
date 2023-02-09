import styled from 'styled-components';

import TextField from '@mui/material/TextField';

export const Form = styled.form`
  margin-top: 100px;
  width: 445px;
  margin-left: auto;
  margin-right: auto;
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
  line-height: 22px;
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

export const ButtonLogin = styled.button`
  display: block;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e8716d;
  border-radius: 3px;
  border: none;
  padding: 10px 35px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e14641;
  }
`;

export const ButtonSignup = styled(ButtonLogin)`
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
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
