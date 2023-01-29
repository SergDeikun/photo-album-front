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
  background-color: white;
  border-radius: 3px;
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
  font-size: 24px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  color: #e8716d;
  letter-spacing: 0.1rem;
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

  /* font-family: $ff; */
  font-size: 16px;
  font-weight: 300;
  color: gray;
  letter-spacing: 0.1rem;

  transition: border-color 0.2s ease-in-out;

  div:hover ~ label {
    color: tomato;
  }

  label {
    color: #ccc;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  div:hover {
    border-bottom-color: tomato;
  }

  div::after {
    border-bottom: 1px solid #ccc;
  }
`;

export const ButtonSignup = styled(AuthButtons)`
  margin-top: 35px;
  margin-left: auto;
`;
