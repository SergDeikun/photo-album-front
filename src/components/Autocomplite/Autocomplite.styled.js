import styled from 'styled-components';

export const Root = styled.div`
  outline: 1px solid tomato;
  margin-bottom: 10px;
  /* position: absolute; */
  /* max-width: 500px; */
  width: 100%;
  overflow: hidden;

  /* top: 10px;
  left: 50%;
  transform: translateX(-50%); */
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; */
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  padding: 6px;
  font-size: 18px;
  background-color: transparent;
  color: ${p => p.theme.colors.grey};
`;

export const List = styled.ul`
  position: absolute;
  /* width: 100%; */
  background-color: ${p => p.theme.colors.grey};

  z-index: 5;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.black};

  padding: 6px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;
