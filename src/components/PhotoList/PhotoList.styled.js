import styled from 'styled-components';

export const AlbumTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`;

export const Thumb = styled.div`
  outline: 1px;
  /* width: 400px;
  height: 532px;
  margin-top: 30px; */
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Thumb1 = styled.div`
  width: 400px;
  height: 532px;
  margin-top: 30px;
  cursor: pointer;
`;

// export const Div3 = styled.div`
//   opacity: 1;
//   visibility: visible;
//   transform: translateY(0);
// `;
