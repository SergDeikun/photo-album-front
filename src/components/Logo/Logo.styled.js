import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  @media ${p => p.theme.device.tablet} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
`;
