import styled from 'styled-components';
import { MdLocationPin } from 'react-icons/md';

export const LocationIcon = styled(MdLocationPin)`
  width: 24px;
  height: 24px;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;

  ${LocationIcon} {
    fill: ${p => (p.isInputFocused ? p.theme.colors.red : p.theme.colors.grey)};
  }
`;
