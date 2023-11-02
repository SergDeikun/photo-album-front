import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListLink = styled.ul`
  /* width: 100%; */
  text-align: center;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    margin-left: auto;
  }
`;

export const ListItem = styled.li`
  @media ${p => p.theme.device.tablet} {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const AuthLink = styled(NavLink)`
  position: relative;
  padding: 15px 0;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.red};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${p => p.theme.colors.white};
  }

  @media ${p => p.theme.device.tablet} {
    /* padding: 25px 6px; */

    color: ${p => p.theme.colors.black};

    &:hover {
      color: ${p => p.theme.colors.red};
    }

    &.active {
      color: ${p => p.theme.colors.red};
    }
  }
`;
