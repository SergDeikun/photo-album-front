import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  padding: 100px 1px 60px 1px;
  /* padding: 80px 1px 60px 1px; */

  @media ${p => p.theme.device.tablet} {
    padding: 100px 20px 20px 20px;
  }
`;

export const WelcomeText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;

  @media ${p => p.theme.device.tablet} {
    width: 700px;
    font-size: ${p => p.theme.fontSize[2]}px;
  }
`;

export const PageTitle = styled.h1`
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 10;
  opacity: 0.2;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSize[3]}px;
  width: 300px;
  color: ${p => p.theme.colors.black};

  @media ${p => p.theme.device.tablet} {
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }

  @media ${p => p.theme.device.desktop} {
    top: 25px;
    left: 50%;
    width: 500px;
    transform: translate(-50%);
  }
`;
