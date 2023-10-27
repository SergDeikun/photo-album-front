import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const LogoImg = styled.img`
  width: 130px;

  @media ${p => p.theme.device.tablet} {
    width: 200px;
  }
`;
