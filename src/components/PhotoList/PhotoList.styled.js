import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

export const AlbumTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`;

export const Thumb = styled.div`
  /* width: 400px;
  height: 532px; */
  /* margin-top: 30px; */
  position: relative;
  overflow: hidden;
  cursor: pointer;

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: #455a47;
    z-index: -1;
    transition: all 0.5s linear;
  } */
`;

export const LinkImg = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

// export const Image = styled(LazyLoadImage)`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;

//   transition: transform 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;
