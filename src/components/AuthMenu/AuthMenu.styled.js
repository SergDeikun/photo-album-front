import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListLink = styled.ul`
  height: 100%;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media ${p => p.theme.device.tablet} {
    margin-left: auto;
  }
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;

  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 5px;
      right: 0;
      display: flex;
      width: 1px;
      height: 40px;
      background-color: ${p => p.theme.colors.darkGrey};
    }
  }

  @media ${p => p.theme.device.tablet} {
    &:not(:last-child) {
      margin-right: 40px;
      &:after {
        display: none;
      }
    }
  }
`;

export const AuthLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  /* color: ${p => p.theme.colors.red}; */
  color: ${p => p.theme.colors.white};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.device.tablet} {
    padding: 15px 0;

    /* padding: 25px 6px; */
    font-size: ${p => p.theme.fontSize[1]}px;

    color: ${p => p.theme.colors.black};

    &:hover {
      color: ${p => p.theme.colors.red};
    }

    &.active {
      color: ${p => p.theme.colors.red};
    }
  }
`;
