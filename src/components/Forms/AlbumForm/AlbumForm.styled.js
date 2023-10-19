import styled from 'styled-components';

import FileInput from 'components/Inputs/FileInput/FileImput';
import Button from 'components/Buttons/Button';

export const Box = styled.div`
  position: relative;
  width: 610px;
  min-height: 510px;
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  overflow: hidden;
`;

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${p =>
    p.background
      ? 'linear-gradient(transparent 0 25%, rgba(34, 34, 34, 0.85))'
      : 'transparent'};
`;

export const InputName = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[2]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  padding: 0 10px 0 10px;
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
  display: flex;
  text-align: center;
  justify-content: space-between;
  height: 55px;
  margin-top: 35px;
  opacity: ${p => (p.name ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

export const UploadCover = styled(FileInput)`
  border-radius: ${p => p.theme.borderRadius.small};
  min-width: 165px;
  height: 50px;

  label {
    font-family: ${p => p.theme.fonts.button};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSize[0]}px;
    line-height: 1.88;
    letter-spacing: 0.1rem;
    color: ${p => p.theme.colors.red};
    border: 1px solid ${p => p.theme.colors.red};
  }

  img {
    outline: 1px solid white;
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
