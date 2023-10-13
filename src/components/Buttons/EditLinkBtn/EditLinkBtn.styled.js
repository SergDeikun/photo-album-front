import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdOutlineEdit } from 'react-icons/md';

export const EditLink = styled(Link)`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* margin-right: 80px; */
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.yellow};
    svg {
      fill: black;
    }
  }
`;

export const EditIcon = styled(MdOutlineEdit)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.red};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
