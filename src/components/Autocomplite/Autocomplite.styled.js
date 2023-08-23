import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  /* margin-bottom: 10px; */
  width: 100%;
  overflow: hidden;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  /* border-bottom: 2px solid white; */
  outline: none;
  padding: 6px;
  font-size: 18px;
  background-color: transparent;
  color: ${p => p.theme.colors.grey};
`;

export const List = styled.ul`
  position: absolute;
  top: 35px;
  width: 100%;
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
