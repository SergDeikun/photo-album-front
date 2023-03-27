import styled from 'styled-components';

import { VscChromeClose } from 'react-icons/vsc';

export const CloseBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 90px;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSize[1]}px;
`;

export const CloseIcon = styled(VscChromeClose)`
  fill: ${p => p.theme.colors.white};
`;
