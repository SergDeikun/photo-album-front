import styled from 'styled-components';

import { VscChromeClose } from 'react-icons/vsc';

export const CloseIcon = styled(VscChromeClose)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.darkGrey};
`;

export const CloseBtn = styled.button`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: transparent;
  border-radius: ${p => p.theme.borderRadius.round};
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.yellow};
    ${CloseIcon} {
      fill: black;
    }
  }
`;
