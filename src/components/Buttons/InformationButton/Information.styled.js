import styled from 'styled-components';

import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Btn = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: grey;
    border-radius: 50%;
  }
`;

export const IconBtn = styled(AiOutlineInfoCircle)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.white};
  /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1); */
`;
