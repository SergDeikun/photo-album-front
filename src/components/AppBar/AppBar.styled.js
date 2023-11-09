import styled from 'styled-components';

import HeaderButton from 'components/Buttons/HeaderButton/HeaderButton';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  margin-left: auto;
  padding-top: 25px;
  padding-bottom: 25px;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AddBtn = styled(HeaderButton)`
  margin-right: 30px;

  @media ${p => p.theme.device.desktop} {
    margin-right: 50px;
  }
`;
