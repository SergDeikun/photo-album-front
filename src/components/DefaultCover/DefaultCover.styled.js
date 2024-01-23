import styled from 'styled-components';

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-color: ${p => p.theme.colors.black};
  border-radius: 3px;

  @media ${p => p.theme.device.desktop} {
    height: 510px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`;
