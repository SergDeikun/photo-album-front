import styled from 'styled-components';

import { MdOutlineDelete } from 'react-icons/md';

export const Btn = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  &:hover {
    /* border: 1px solid teal; */
    border-radius: 30%;
    background-color: ${p => p.theme.colors.red};
  }
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.black};
`;
