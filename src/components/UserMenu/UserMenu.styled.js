import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonMenu = styled.button`
  position: relative;
  margin-left: 50px;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
  &:not(:first-child) {
    margin-top: 20px;
  }
  border-bottom: 1px solid ${p => p.theme.colors.darkGrey};
`;

export const MenuLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.yellow};
  line-height: 1.66;
  text-align: start;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.darkGrey};
  }
`;
