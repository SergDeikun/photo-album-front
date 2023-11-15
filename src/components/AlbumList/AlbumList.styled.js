import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

export const List = styled.ul`
  width: 100%;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media ${p => p.theme.device.desktop} {
    gap: 20px;
  }
`;

export const Item = styled.li`
  position: relative;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 10px) / 2);

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media ${p => p.theme.device.desktop} {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  height: 400px;
  overflow: hidden;
  border-radius: ${p => p.theme.borderRadius.small};
  /* background-image: url(${p => p.backgroundImage}); */
  background-image: ${({ backgroundImg }) =>
    backgroundImg ? `url(${backgroundImg})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  overflow: hidden;

  @media ${p => p.theme.device.desktop} {
    height: 510px;
  }
`;

// export const Image = styled(LazyLoadImage)`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

export const AlbumName = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  padding: 10px 10px;
  border-radius: ${p => p.theme.borderRadius.small};

  background-image: linear-gradient(
    transparent 0 25%,
    ${p => p.theme.colors.black}
  );
  color: ${p => p.theme.colors.white};

  /* padding-top: 10px; */
  /* width: 600px; */
  word-break: break-word;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  /* color: ${p => p.theme.colors.black}; */
`;
