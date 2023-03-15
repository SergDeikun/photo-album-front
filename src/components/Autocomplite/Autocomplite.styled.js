import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 10px;
  left: 40%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
`;

export const List = styled.ul`
  position: absolute;
  top: 0;
  background-color: white;
`;

export const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;
