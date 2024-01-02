import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-top: 50px;
  text-align: center;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSize[2]}px;
  color: ${p => p.theme.colors.black};

  @media ${p => p.theme.device.tablet} {
    margin-top: 80px;
    font-size: ${p => p.theme.fontSize[3]}px;
  }

  @media ${p => p.theme.device.desktop} {
    margin-top: 100px;
  }
`;
