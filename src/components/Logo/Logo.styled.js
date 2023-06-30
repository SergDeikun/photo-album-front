import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding-top: 30px;
  padding-bottom: 30px; */
  font-family: ${p => p.theme.fonts.body};
  /* font-size: ${p => p.theme.fontSize[3]}px; */
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.red};
  line-height: 1.2;
`;

export const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
  fill: red;
`;
