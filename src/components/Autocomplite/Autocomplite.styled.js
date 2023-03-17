import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  /* max-width: 500px; */
  width: 500px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 18px;
`;

export const List = styled.ul`
  position: absolute;
  width: 100%;
  background-color: white;
`;

export const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;
