import styled from 'styled-components';

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  text-align: center;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  line-height: 1.2;

  @media ${p => p.theme.device.tablet} {
    font-size: 70px;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 15;
  left: 500px;
  top: 50px;
`;
