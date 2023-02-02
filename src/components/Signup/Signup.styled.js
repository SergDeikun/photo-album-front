import styled from 'styled-components';

import { AuthButtons } from 'components/Buttons/AuthButtons';
import TextField from '@mui/material/TextField';

export const BoxFormSignup = styled.div`
  position: absolute;
  /* top: 50%; */
  left: 155px;
  /* width: calc(50% - 30px); */
  width: 445px;
  min-height: 420px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius.small};
  padding: 0 20px 0 20px;
  box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
  overflow: hidden;

  /* transform: translate3d(100%, -50%, 0);
  transition: transform 0.4s ease-in-out; */
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormsTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 25px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSize[2]}px;
  line-height: 16px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
`;

export const Field = styled(TextField)`
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

export const ButtonSignup = styled(AuthButtons)`
  margin-top: 35px;
  margin-left: auto;
`;
