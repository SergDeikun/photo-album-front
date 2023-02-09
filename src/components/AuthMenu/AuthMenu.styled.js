import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListLink = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const AuthLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 30px;
  color: ${p => p.theme.colors.black};

  padding-top: 38px;
  padding-bottom: 38px;
`;
