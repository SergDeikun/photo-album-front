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

export const Img1 = styled.img`
  position: absolute;
  right: -20px;
  top: -30px;
  width: 300px;
  rotate: -15deg;
`;
export const Img2 = styled.img`
  position: absolute;
  top: 50px;
  left: 390px;
  width: 500px;
  rotate: 7deg;
`;

export const Img3 = styled.img`
  width: 300px;
  top: 90px;
  left: -60px;
  position: absolute;
  rotate: -5deg;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.2;
    z-index: 7;
  }
`;

export const Img4 = styled.img`
  position: absolute;
  right: 100px;
  top: 300px;
  z-index: 1;
  width: 300px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.2;
  }
`;

export const Img6 = styled.img`
  position: absolute;
  left: 0px;
  top: 290px;
  width: 300px;
  rotate: 5deg;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.2;
  }
`;

export const Img8 = styled.img`
  position: absolute;
  left: 0px;
  top: -85px;
  width: 300px;
  rotate: 10deg;
  z-index: 6;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.2;
    z-index: 6;
  }
`;
