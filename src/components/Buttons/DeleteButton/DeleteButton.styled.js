import styled from 'styled-components';

import { MdOutlineDelete } from 'react-icons/md';

export const Btn = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;

  /* &:hover {
    background-color: grey;
    border-radius: 50%;
  } */
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.black};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Btn}:hover & {
    /* fill: ${p => p.theme.colors.red}; */
  }
`;
