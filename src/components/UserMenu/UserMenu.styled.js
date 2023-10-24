import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import AuthMenu from 'components/AuthMenu/AuthMenu';

export const ButtonMenu = styled.button`
  position: relative;
  margin-left: auto;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.devaice.tablet} {
    font-size: ${p => p.theme.fontSize[1]}px;
    margin-left: 50px;
  }
`;

export const Box = styled(motion.div)`
  /* position: absolute; */
  /* z-index: 10; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  /* background-color: black; */

  @media ${p => p.theme.devaice.tablet} {
    width: 320px;
    /* height: 500px; */
    /* right: 10px; */
  }
`;

export const MenuList = styled.ul`
  width: 100%;

  padding: 115px 10px;
`;

export const MenuItem = styled.li`
  width: 100%;

  &:not(:first-child) {
    margin-top: 20px;
  }

  /* border-bottom: 1px solid ${p => p.theme.colors.darkGrey}; */
`;

export const MenuLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.grey};
  line-height: 1.66;
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.devaice.desktop} {
    text-align: start;
    /* padding-left: 20px; */
  }
`;

export const Auth = styled(AuthMenu)`
  ul {
    outline: 1px solid tomato;
  }
`;
