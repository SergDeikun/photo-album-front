import { NavLink } from 'react-router-dom';
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

export const AuthLink = styled(NavLink)`
  position: relative;
  padding: 25px 6px;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &.active {
    color: ${p => p.theme.colors.red};
  }

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;
