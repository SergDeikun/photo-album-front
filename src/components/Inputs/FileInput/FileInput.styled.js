import styled from 'styled-components';

import { BsUpload } from 'react-icons/bs';

export const UploadBox = styled.div`
  /* display: flex; */
  position: relative;
  /* position: absolute; */

  min-width: 320px;
  height: 100%;
  /* height: 300px; */
  height: 480px;
  /* border: 2px dashed ${p => p.theme.colors.grey}; */
  border-radius: ${p => p.theme.borderRadius.small};
  /* margin-bottom: 35px; */
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.red};
`;

export const Image = styled.img`
  /* max-width: 100%;
  max-height: 100%; */

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
`;

export const Icon = styled(BsUpload)`
  width: 70px;
  height: 70px;
  color: ${p => p.theme.colors.yellow};
  margin-right: 50px;
`;
