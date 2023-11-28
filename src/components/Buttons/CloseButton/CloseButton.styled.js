import styled from 'styled-components';

import { VscChromeClose } from 'react-icons/vsc';

export const CloseIcon = styled(VscChromeClose)`
  width: 30px;
  height: 30px;
  fill: ${p => p.theme.colors.grey};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${p => p.theme.device.desktop} {
    width: 24px;
    height: 24px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: transparent;
  border-radius: ${p => p.theme.borderRadius.round};
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    svg {
      fill: ${p => p.theme.colors.red};
    }
  }

  @media ${p => p.theme.device.tablet} {
    position: absolute;
    z-index: 10;
    top: 10px;
    right: 20px;
  }
`;
