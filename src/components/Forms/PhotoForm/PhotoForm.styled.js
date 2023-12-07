import styled from 'styled-components';

import Autocomplite from 'components/Autocomplite/Autocomplite';
import Button from 'components/Buttons/Button';

export const Box = styled.div`
  width: 100%;
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

//* Info

export const FieldWrapper = styled.div`
  position: absolute;
  top: -2px;
  left: -1px;
  width: 312px;
  height: 388px;
  background-color: ${p => p.theme.colors.black};

  @media ${p => p.theme.device.tablet} {
    width: 502px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 613px;
    height: 514px;
  }
`;

export const InputWrapper = styled.div`
  /* margin-top: 50px; */
  display: flex;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const ButtonWraper = styled.div`
  margin-top: 30px;
  height: 130px;
  opacity: ${p => (p.previewPhoto ? 1 : 0)};
  visibility: ${p => (p.previewPhoto ? 'visible' : 'hidden')};
  transition: opacity 0.5s linear;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 50px;
  }
`;

export const AddInfoBtn = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.borderRadius.small};
  font-family: ${p => p.theme.fonts.button};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  border: 1px solid ${p => p.theme.colors.red};
  text-transform: uppercase;
  background-color: transparent;
  color: ${p => p.theme.colors.red};

  @media ${p => p.theme.device.tablet} {
    width: 165px;
    height: 50px;
  }
`;

export const SaveButton = styled(Button)`
  padding: 0;
  width: 100%;
  height: 50px;
  margin-top: 20px;

  @media ${p => p.theme.device.tablet} {
    width: 165px;
    margin-top: 0;
  }
`;
