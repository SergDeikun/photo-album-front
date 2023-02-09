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
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 30px;
  color: ${p => p.theme.colors.black};

  padding-top: 38px;
  padding-bottom: 38px;
  transition-property: transform;

  &:after {
    content: '';
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e8716d;
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }

  &.active {
    color: #e8716d;
  }

  /* &:hover {
    transform: scale(1);
  } */

  &:hover:after {
    transform: rotate(0deg);
  }
`;
