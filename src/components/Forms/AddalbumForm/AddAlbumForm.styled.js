import styled from 'styled-components';

import { UploadBox } from 'components/Inputs/FileInput/FileInput.styled';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  margin-bottom: 50px;
`;

export const UploadFile = styled(UploadBox)`
  margin-bottom: 35px;
`;
