import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 30px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regural};
  color: ${p => p.theme.colors.red};
`;
