import styled from 'styled-components';

import { MdOutlineDelete } from 'react-icons/md';

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: #575150;

  /* fill: ${p => p.theme.colors.white}; */
`;

export const Btn = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.yellow};
    ${DeleteIcon} {
      fill: ${p => p.theme.colors.black};
    }
  }
`;
