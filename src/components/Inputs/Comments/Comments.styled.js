import styled from 'styled-components';

import TextareaAutosize from '@mui/base/TextareaAutosize';

export const Textarea = styled(TextareaAutosize)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  padding: 6px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  width: 395px;
  height: 175px;
`;
