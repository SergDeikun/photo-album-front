import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonMenu = styled.button`
  position: relative;
  margin-left: 50px;
  /* font-family: ${p => p.theme.fonts.body}; */
  font-family: ${p => p.theme.fonts.main};

  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: transparent;

  &:after {
    content: '';
    position: absolute;
    bottom: 5px;

    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.red};
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }

  &:hover:after {
    transform: rotate(0deg);
  }
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
  &:not(:first-child) {
    margin-top: 20px;
  }
  border-bottom: 1px solid #575150;
`;

export const MenuLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  /* color: ${p => p.theme.colors.white}; */
  color: ${p => p.theme.colors.yellow};
  line-height: 1.66;
  text-align: start;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* color: ${p => p.theme.colors.red}; */
  }
`;
