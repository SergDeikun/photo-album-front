import styled from 'styled-components';

import { visualyHidden } from '../../styles/visualyHidden';

export const SaveBtn = styled.button`
  /* ${visualyHidden} */

  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSize[1]}px;
  font-family: ${p => p.theme.fonts.button};
  color: ${p => p.theme.colors.red};
  /* padding: 10px; */
  width: 165px;
  height: 50px;
  border-radius: 3px;
  transition: opacity 0.5s linear;
  display: ${p => (p.isVisible ? 'block' : 'none')};
  /* opacity: ${p => (p.isVisible ? 1 : 0)}; */
`;
