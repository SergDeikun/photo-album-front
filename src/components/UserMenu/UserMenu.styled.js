import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import Modal from 'components/Modal/Modal';

export const ButtonMenu = styled.button`
  position: relative;
  margin-left: 50px;

  font-family: ${p => p.theme.fonts.body};
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

export const MenuList = styled.ul`
  /* &:hover {
    filter: blur(5px);
  } */
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
  line-height: 1.66;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;
