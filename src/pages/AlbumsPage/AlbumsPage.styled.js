import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  padding: 100px 10px 20px 10px;

  @media ${p => p.theme.devaice.tablet} {
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

  @media ${p => p.theme.devaice.tablet} {
    width: 700px;
    font-size: ${p => p.theme.fontSize[2]}px;
  }
`;

export const PageTitle = styled.h1`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  opacity: 0.1;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSize[2]}px;
  width: 200px;
  color: ${p => p.theme.colors.black};
  text-align: center;

  @media ${p => p.theme.devaice.tablet} {
    top: 35px;
    left: 205px;
    width: 300px;
    transform: none;
    font-size: ${p => p.theme.fontSize[3]}px;
  }

  @media ${p => p.theme.devaice.desktop} {
    top: -5px;
    left: 50%;

    width: 500px;
    transform: translate(-50%);
    font-size: ${p => p.theme.fontSize[4]}px;
  }
`;
