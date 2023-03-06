import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';
import TextField from '@mui/material/TextField';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  margin-bottom: 50px;
`;

export const Box = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  border: 2px dashed white;
  border-radius: ${p => p.theme.borderRadius.small};
  margin-bottom: 35px;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* width: 233px;
  height: 233px; */
  /* object-fit: cover; */
`;

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
`;

export const Input = styled(TextField)`
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
      color: ${p => p.theme.colors.main};
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
    border-bottom: 2px solid white;
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:before {
    border-bottom: 2px solid white;
  }

  .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid white;
  }
`;

export const Icon = styled(BsUpload)`
  width: 70px;
  height: 70px;
  color: blue;
  margin-right: 50px;
`;
