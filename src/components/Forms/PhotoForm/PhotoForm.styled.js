import styled from 'styled-components';

import Autocomplite from 'components/Autocomplite/Autocomplite';
import Button from 'components/Buttons/Button';

export const Form = styled.form`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  position: relative;
  /* height: 100vh; */
`;

export const Box = styled.div`
  position: relative;
  width: 310px;
  /* min-height: 400px; */
  min-height: 385px;

  display: flex;
  justify-content: center;
  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;

  @media ${p => p.theme.device.tablet} {
    width: 500px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 610px;
    min-height: 510px;
  }
`;

export const AddInfoBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 80px;
  height: 20px;
  font-family: ${p => p.theme.fonts.button};
  font-weight: ${p => p.theme.fontWeights.regular};
  /* font-size: ${p => p.theme.fontSize[0]}px; */
  line-height: 1.88;
  letter-spacing: 0.1rem;
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  border-radius: 3px;
  border-radius: 3px 3px 3px 0px;
  color: white;
`;

export const FieldWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;

export const Place = styled(Autocomplite)`
  label {
    display: block;
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 6px;
    font-size: 18px;
    background-color: transparent;
    color: ${p => p.theme.colors.grey};
  }

  ul {
    position: absolute;
    top: 35px;
    width: 100%;
    background-color: ${p => p.theme.colors.bodyBg};
    z-index: 5;
  }

  li {
    color: ${p => p.theme.colors.black};
    padding: 6px 15px;
    cursor: pointer;

    &:hover {
      background-color: ${p => p.theme.colors.grey};
    }
  }
`;

export const SaveButton = styled(Button)`
  /* position: absolute;
  bottom: 0; */
  /* margin-top: 50px; */
  @media ${p => p.theme.device.desktop} {
    width: 165px;
    height: 50px;
  }
`;
