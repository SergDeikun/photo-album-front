import styled from 'styled-components';

import { VscChromeClose } from 'react-icons/vsc';

export const CloseBtn = styled.button`
  position: absolute;
  z-index: 10;
  /* top: 25px; */
  /* right: 90px; */
  top: 10px;

  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: grey;
    border-radius: 50%;
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.white};
`;
