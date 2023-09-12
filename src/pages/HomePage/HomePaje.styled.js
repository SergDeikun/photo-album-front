import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  /* height: 100vh; */

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  /* width: 445px; */
  width: 545px;
  /* text-align: center; */

  margin-top: 120px;

  margin-left: auto;
  margin-right: auto;
  /* font-family: 'Babylonica', cursive; */
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  line-height: 1.2;
`;

export const Word = styled.span`
  color: ${p => p.theme.colors.red};
`;

export const BoxImage = styled.div`
  position: relative;
  display: flex;
  /* transform: rotate(90deg); */
`;

export const Image = styled.img`
  position: absolute;
  z-index: 15;
  left: 500px;
  top: 50px;
`;
