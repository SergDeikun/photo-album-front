import styled from 'styled-components';

export const Title = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-family: ${p => p.theme.fonts.second};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSize[2]}px;
  color: ${p => p.theme.colors.black};

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSize[3]}px;
  }
`;
