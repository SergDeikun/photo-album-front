import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Box = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.black};

  @media ${p => p.theme.device.desktop} {
    right: 10px;
    width: 320px;
    height: 400px;
    padding: 0 10px;
  }
`;

export const MenuList = styled.ul`
  width: 100%;
`;

export const MenuItem = styled.li`
  width: 100%;

  &:not(:first-child) {
    margin-top: 20px;
  }

  @media ${p => p.theme.device.desktop} {
    border-bottom: 1px solid ${p => p.theme.colors.darkGrey};
  }
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
`;
