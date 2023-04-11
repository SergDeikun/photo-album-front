import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  margin-top: 80px;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: ${p => p.theme.borderRadius.grey};

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;

export const LinkAlbum = styled(Link)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
`;

export const IconAlbum = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30%;
`;
