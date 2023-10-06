import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import Button from 'components/Buttons/Button';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 445px;
`;

export const InputrWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled(TextField)`
  div {
    border-bottom: 1px solid ${p => p.theme.colors.black};
    background-color: transparent;

    &:before {
      content: none;
    }

    &:after {
      content: none;
    }
  }

  input {
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    line-height: 1.88;
    letter-spacing: 0.1rem;
    color: ${p => p.theme.colors.black};
    padding-left: 2px;
  }

  label {
    left: -12px;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    color: ${p => p.theme.colors.black};
    letter-spacing: 0.1rem;

    &.Mui-focused {
      color: ${p => p.theme.colors.black};
    }
  }

  p {
    margin-left: 2px;
  }

  .css-2y464i-MuiInputBase-root-MuiFilledInput-root:hover {
    background-color: transparent;
  }

  .css-2y464i-MuiInputBase-root-MuiFilledInput-root.Mui-focused {
    background-color: transparent;
  }
`;

export const SubmitBtn = styled(Button)`
  margin-top: 50px;
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
