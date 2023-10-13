import styled from 'styled-components';
import BgCover from '../../images/bg-cover.jpg';

export const BoxCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 610px;
  height: 509px;
  background-image: url(${BgCover});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const Text = styled.span`
  /* font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grey};
  text-shadow: #111 1px 1px 0; */
`;
