import styled from 'styled-components';

export const WelcomeText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* outline: 1px solid tomato; */
  /* margin-top: 300px; */
  width: 700px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
`;

export const PageTitle = styled.h1`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  opacity: 0.1;
  /* margin-top: 80px; */
  /* font-family: ${p => p.theme.fonts.body}; */
  font-family: ${p => p.theme.fonts.main};
  font-weight: 600;
  /* font-size: clamp(4rem, 2.3929rem + 5.1429vw, 6.25rem); */
  background-clip: text;
  font-size: ${p => p.theme.fontSize[4]}px;
  /* font-weight: ${p => p.theme.fontWeights.medium}; */
  color: ${p => p.theme.colors.black};
  text-align: center;
`;
