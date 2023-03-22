import styled from 'styled-components';
import { MdLocationPin } from 'react-icons/md';

export const Btn = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
`;

export const LocationIcon = styled(MdLocationPin)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.grey};
`;
