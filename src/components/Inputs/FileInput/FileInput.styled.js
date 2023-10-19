import styled from 'styled-components';

import { BsUpload } from 'react-icons/bs';

export const UploadBox = styled.div`
  position: relative;
  min-width: 320px;
  height: 100%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const LabelUpload = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[1]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconWrapper = styled.div`
  display: ${p => (p.isVisible ? 'flex' : 'none')};
  align-items: center;
`;

export const Icon = styled(BsUpload)`
  width: 70px;
  height: 70px;
  fill: ${p => p.theme.colors.red};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 50px;
`;
