import styled from 'styled-components';
import BgCover from '../../images/bg-cover.jpg';

export const BoxCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 510px;
  /* height: 100%; */
  border-radius: ${p => p.theme.borderRadius.small};
  overflow: hidden;
  background-image: url(${BgCover});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;

  @media ${p => p.theme.devaice.tablet} {
    /* width: 354px; */
    /* width: 100%; */
    /* height: 510px; */
  }

  @media ${p => p.theme.devaice.desktop} {
    /* width: 610px;
    height: 510px; */
  }
`;
