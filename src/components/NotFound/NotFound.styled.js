import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grey};
`;

export const ErrorNumber = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSize[3]}px;
`;

export const VerticalLine = styled.span`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  &:before {
    content: ' ';
    position: absolute;
    top: -35px;
    left: 0;
    width: 3px;
    height: 70px;
    background-color: ${p => p.theme.colors.grey};
  }
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 30px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regural};
  color: ${p => p.theme.colors.red};
`;
