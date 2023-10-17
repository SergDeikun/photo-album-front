import styled from 'styled-components';

import FileInput from 'components/Inputs/FileInput/FileImput';
import Button from 'components/Buttons/Button';

export const Box = styled.div`
  /* outline: 1px solid white; */
`;

export const NameWrapper = styled.div`
  margin-bottom: 50px;
`;

export const InputName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[2]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  padding: 0 20px 0 20px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  ::placeholder {
    text-align: center;
    color: ${p => p.theme.colors.white};
  }

  &:hover {
    border-bottom: 1px solid #575150;
  }

  &:focus {
    border-bottom: 1px solid #575150;
  }
`;

export const ButttonWraper = styled.div`
  /* outline: 1px solid tomato; */
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

export const UploadCover = styled(FileInput)`
  /* outline: 1px solid wheat; */
  border: 1px solid ${p => p.theme.colors.red};
  border-radius: ${p => p.theme.borderRadius.small};

  width: 165px;
  height: 50px;
  label {
    font-family: ${p => p.theme.fonts.button};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    line-height: 1.88;
    letter-spacing: 0.1rem;
    color: ${p => p.theme.colors.red};
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.red};
    label {
      color: ${p => p.theme.colors.white};
    }

    svg {
      fill: ${p => p.theme.colors.white};
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin: 0;
`;
