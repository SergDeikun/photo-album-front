import styled from 'styled-components';

import { MdDeleteOutline } from 'react-icons/md';

export const DeleteIcon = styled(MdDeleteOutline)`
  width: 30px;
  height: 30px;
  fill: ${p => p.theme.colors.grey};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${p => p.theme.device.desktop} {
    width: 24px;
    height: 24px;
  }
`;

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
    svg {
      fill: ${p => p.theme.colors.red};
    }
  }
`;
