import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  /* width: 35%;
  height: 100%; */
  /* background-color: grey; */
`;

export const ButtonMenu = styled.button`
  /* margin-left: auto; */
  margin-left: 50px;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 30px;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: ${p => p.theme.colors.white};
`;

export const WrapperLink = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const MenuLink = styled(Link)`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
  line-height: 1.22;
`;

export const LogoutButton = styled.button`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: none;
  margin-top: 50px;
`;
