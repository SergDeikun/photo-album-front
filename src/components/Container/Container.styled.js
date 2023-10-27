import styled from 'styled-components';

export const ContainerBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  @media ${p => p.theme.device.mobile} {
    max-width: 320px;
    padding: 0 10px;
  }

  @media ${p => p.theme.device.tablet} {
    max-width: 768px;
  }

  @media ${p => p.theme.device.desktop} {
    max-width: 1280px;
  }
`;
