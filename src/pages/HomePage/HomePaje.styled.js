import styled from 'styled-components';
import bgHp from '../../images/fotoBg.jpg';

export const Box = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background-image: url(${bgHp}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  width: 445px;
  /* margin-top: 150px; */

  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
`;
