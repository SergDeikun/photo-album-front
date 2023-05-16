import styled from 'styled-components';

import { MdOutlineDelete } from 'react-icons/md';

export const Btn = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  /* &:hover {
    border-radius: 30%;
    background-color: ${p => p.theme.colors.red};
  } */
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.black};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Btn}:hover & {
    fill: ${p => p.theme.colors.red};
  }
`;
