import styled from 'styled-components';

import { BsUpload } from 'react-icons/bs';

export const UploadBox = styled.div`
  /* display: flex; */
  position: relative;
  /* position: absolute; */

  width: 500px;
  height: 300px;
  border: 2px dashed white;
  border-radius: ${p => p.theme.borderRadius.small};
  margin-bottom: 35px;
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
  color: white;
  cursor: pointer;
`;

export const Icon = styled(BsUpload)`
  width: 70px;
  height: 70px;
  color: blue;
  margin-right: 50px;
`;
