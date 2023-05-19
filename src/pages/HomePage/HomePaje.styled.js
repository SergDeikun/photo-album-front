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
  width: 526px;
  /* text-align: center; */

  margin-top: 100px;

  margin-left: auto;
  margin-right: auto;
  /* font-family: 'Babylonica', cursive; */
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  line-height: 1.2;
`;

export const BoxImage = styled.div`
  position: relative;
  display: flex;
`;

export const Img1 = styled.img`
  position: absolute;
  right: -20px;
  top: -60px;
  width: 300px;
  rotate: -15deg;
  /* z-index: 1; */
  /* height: 100px; */
`;
export const Img2 = styled.img`
  position: absolute;
  top: 50px;
  left: 390px;
  width: 500px;
  /* rotate: 10deg; */
  rotate: 7deg;
`;

export const Img3 = styled.img`
  width: 300px;
  top: 100px;
  position: absolute;
  rotate: -10deg;
`;

export const Img4 = styled.img`
  position: absolute;
  right: 100px;
  /* top: 215px; */
  top: 300px;
  z-index: 1;
  width: 300px;
`;

// export const Img5 = styled.img`
//   position: absolute;
//   left: 100px;
//   top: 300px;

//   width: 100px;
// `;

export const Img6 = styled.img`
  position: absolute;
  left: 0px;
  /* top: 100px; */
  top: 300px;

  width: 300px;
  /* rotate: 10deg; */
  rotate: 20deg;
`;

export const Img8 = styled.img`
  position: absolute;
  left: 0px;
  /* top: 100px; */
  top: -60px;

  width: 300px;
  /* rotate: 10deg; */
  rotate: 14deg;
`;
