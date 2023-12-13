import styled from 'styled-components';
// import { IoShareSocialOutline } from 'react-icons/io5';
import { FiShare2 } from 'react-icons/fi';

export const ShareIcon = styled(FiShare2)`
  width: 30px;
  height: 30px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  circle,
  line {
    stroke: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.device.desktop} {
    width: 24px;
    height: 24px;
  }
`;

export const ShareBtn = styled.button`
  /* position: absolute; */
  /* top: 5px; */
  /* right: 5px; */
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* border-radius: 50%; */
  border: none;
  /* background-color: rgba(192, 192, 192, 0.9); */

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${p => p.theme.device.desktop} {
    &:hover {
      circle,
      line {
        stroke: ${p => p.theme.colors.white};
      }
    }
  }
`;
