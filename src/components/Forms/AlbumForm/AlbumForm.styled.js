import styled from 'styled-components';

import FileInput from 'components/Inputs/FileInput/FileImput';
import Button from 'components/Buttons/Button';

export const Form = styled.form`
  /* height: 100vh; */
  /* padding-top: 130px; */
`;

export const Box = styled.div`
  position: relative;
  width: 310px;
  min-height: 400px;
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  overflow: hidden;

  @media ${p => p.theme.device.tablet} {
    /* width: 360px; */
    width: 500px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 610px;
    min-height: 510px;
  }
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
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  /* font-size: ${p => p.theme.fontSize[2]}px; */
  font-size: ${p => p.theme.fontSize[1]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  padding: 0 10px 0 10px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  ::placeholder {
    color: ${p => p.theme.colors.white};

    @media ${p => p.theme.device.desktop} {
      text-align: center;
    }
  }

  &:hover {
    border-bottom: 1px solid #575150;
  }

  &:focus {
    border-bottom: 1px solid #575150;
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSize[2]}px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 100%;
  }
`;

export const ButttonWraper = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; */

  /* height: 55px; */
  /* margin-top: 35px; */
  margin-top: 100px;

  /* opacity: ${p => (p.name ? 1 : 0)}; */
  visibility: ${p => (p.name ? 'visible' : 'hidden')};
  transition: opacity 0.5s linear;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 0 30px;
  }

  @media ${p => p.theme.device.desktop} {
    padding: 0 50px;
  }
`;

export const UploadCover = styled(FileInput)`
  min-width: 120px;
  /* height: 40px; */
  height: 50px;

  border: 1px solid ${p => p.theme.colors.red};
  border-radius: ${p => p.theme.borderRadius.small};

  @media ${p => p.theme.device.tablet} {
    width: 165px;
    height: 50px;
  }

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
  padding: 0;
  width: 100%;
  height: 50px;
  margin-top: 30px;

  @media ${p => p.theme.device.tablet} {
    width: 165px;
    /* height: 50px; */
    margin-top: 0;
  }
`;
