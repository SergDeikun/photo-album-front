import styled from 'styled-components';

import { MdSaveAs } from 'react-icons/md';

export const IconBtn = styled(MdSaveAs)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.red};
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
`;
